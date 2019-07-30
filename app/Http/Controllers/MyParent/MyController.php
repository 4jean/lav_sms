<?php

namespace App\Http\Controllers\MyParent;
use App\Http\Controllers\Controller;
use App\Repositories\StudentRepo;
use Illuminate\Support\Facades\Auth;

class MyController extends Controller
{
    protected $student;
    public function __construct(StudentRepo $student)
    {
        $this->student = $student;
    }

    public function children()
    {
        $data['students'] = $this->student->getRecord(['my_parent_id' => Auth::user()->id])->with(['my_class', 'section'])->get();

        return view('pages.parent.children', $data);
    }

}