<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Saas\SchoolSubscriptionRequest;
use App\Models\SchoolSubscription;
use Illuminate\Support\Facades\DB;

class SchoolSubscriptionController extends Controller
{
    public function __construct()
    {
        $this->middleware('super_admin');
    }

    public function store(SchoolSubscriptionRequest $request)
    {
        $subscription = DB::transaction(function () use ($request) {
            $data = $request->validated();
            $moduleIds = $data['module_ids'] ?? [];
            unset($data['module_ids']);
            $data['currency'] = strtoupper($data['currency']);
            $data['grace_days'] = $data['grace_days'] ?? 0;
            $data['decided_by'] = auth()->id();

            $subscription = SchoolSubscription::create($data);

            foreach ($moduleIds as $moduleId) {
                DB::table('school_module_licenses')->insert([
                    'school_id' => $subscription->school_id,
                    'module_id' => $moduleId,
                    'subscription_id' => $subscription->id,
                    'starts_at' => $subscription->starts_at,
                    'ends_at' => $subscription->ends_at,
                    'enabled' => true,
                    'granted_by' => auth()->id(),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            $this->audit($subscription, 'created', null, $subscription->toArray());
            return $subscription;
        });

        return response()->json(['data' => $subscription], 201);
    }

    public function update(SchoolSubscriptionRequest $request, SchoolSubscription $subscription)
    {
        $before = $subscription->toArray();

        DB::transaction(function () use ($request, $subscription, $before) {
            $data = $request->validated();
            $moduleIds = $data['module_ids'] ?? null;
            unset($data['module_ids'], $data['school_id']);
            $data['currency'] = strtoupper($data['currency']);
            $data['decided_by'] = auth()->id();
            $subscription->update($data);

            if (is_array($moduleIds)) {
                DB::table('school_module_licenses')->where('subscription_id', $subscription->id)->delete();
                foreach ($moduleIds as $moduleId) {
                    DB::table('school_module_licenses')->insert([
                        'school_id' => $subscription->school_id,
                        'module_id' => $moduleId,
                        'subscription_id' => $subscription->id,
                        'starts_at' => $subscription->starts_at,
                        'ends_at' => $subscription->ends_at,
                        'enabled' => true,
                        'granted_by' => auth()->id(),
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }

            $this->audit($subscription, 'updated', $before, $subscription->fresh()->toArray());
        });

        return response()->json(['data' => $subscription->fresh()]);
    }

    private function audit(SchoolSubscription $subscription, $action, $before, $after)
    {
        DB::table('subscription_audit_logs')->insert([
            'school_id' => $subscription->school_id,
            'subscription_id' => $subscription->id,
            'actor_id' => auth()->id(),
            'action' => $action,
            'before' => $before ? json_encode($before) : null,
            'after' => $after ? json_encode($after) : null,
            'ip_address' => request()->ip(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
