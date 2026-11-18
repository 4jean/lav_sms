<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Saas\SchoolRequest;
use App\Models\School;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SchoolController extends Controller
{
    public function __construct()
    {
        $this->middleware('super_admin');
    }

    public function index(Request $request)
    {
        $schools = School::query()
            ->with(['subscriptions' => function ($query) {
                $query->latest('ends_at')->limit(1);
            }])
            ->when($request->filled('status'), function ($query) use ($request) {
                $query->where('status', $request->status);
            })
            ->when($request->filled('search'), function ($query) use ($request) {
                $search = trim($request->search);
                $query->where(function ($inner) use ($search) {
                    $inner->where('name', 'like', "%{$search}%")
                        ->orWhere('code', 'like', "%{$search}%");
                });
            })
            ->orderBy('name')
            ->paginate(min(max((int) $request->input('per_page', 20), 1), 100));

        return response()->json($schools);
    }

    public function store(SchoolRequest $request)
    {
        $school = DB::transaction(function () use ($request) {
            return School::create($request->validated());
        });

        return response()->json(['data' => $school], 201);
    }

    public function show(School $school)
    {
        return response()->json([
            'data' => $school->load(['subscriptions' => function ($query) {
                $query->latest('ends_at');
            }]),
        ]);
    }

    public function update(SchoolRequest $request, School $school)
    {
        $school->update($request->validated());

        return response()->json(['data' => $school->fresh()]);
    }

    public function setStatus(Request $request, School $school)
    {
        $data = $request->validate([
            'status' => 'required|in:active,suspended,cancelled',
        ]);

        DB::transaction(function () use ($school, $data) {
            $school->update($data);

            if ($data['status'] !== 'active') {
                $school->subscriptions()
                    ->where('status', 'active')
                    ->update(['status' => 'suspended']);
            }
        });

        return response()->json(['data' => $school->fresh()]);
    }
}
