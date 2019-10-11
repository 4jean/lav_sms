<?php

namespace App\Http\Controllers;

use App\Helpers\Qs;
use App\Helpers\Mk;
use App\Helpers\Pay;
use App\Models\ExamRecord;
use App\Models\Grade;
use App\Models\Mark;
use App\Models\StaffRecord;
use App\Models\StudentRecord;
use App\models\TimeSlot;
use App\models\TimeTable;
use App\Repositories\ExamRepo;
use App\Repositories\MyClassRepo;
use App\Repositories\StudentRepo;
use App\Repositories\UserRepo;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class TestController extends Controller
{
    protected $mc, $exam, $student, $user;
    public function __construct(MyClassRepo $mc, ExamRepo $exam, StudentRepo $student, UserRepo $user)
    {
        $this->exam = $exam;
        $this->user = $user;
        $this->student = $student;
        $this->mc = $mc;
    }

    public function index(Request $request)
    {
        //return strtotime('now') - strtotime('12 december 2018');
        return date_diff(date_create('12 december 2018'), date_create('now'))->y;
    }

    public function changeStaff()
    {
        $sfs = StaffRecord::all();
        foreach ($sfs as $sf) {
            $emp_date = $sf->emp_date ? str_replace(',', '', $sf->emp_date) : '11 November, 2018';
            $ed = explode(' ', $emp_date);
            $str = $ed[0].'-'.$ed[1].' '.$ed[2];
            $code = $u['username'] = 'QS/STAFF/'.date('Y/m', strtotime($str)).'/'.mt_rand(1000, 9999);
            StaffRecord::find($sf->id)->update(['code' => $code]);
            $this->user->update($sf->user_id, $u);
        }
        return $code;
    }

    public function changeAdmNo()
    {
        $sts = StudentRecord::all();
        foreach($sts as $sr){
            $a = explode('/', $sr->adm_no);
            array_pop($a);
            array_push($a, mt_rand(1000, 9999));
            $d['adm_no'] = $u['username'] = implode('/', $a);
            $this->student->updateRecord($sr->id, $d);
            $this->user->update($sr->user_id, $u);
        }
    }

}
