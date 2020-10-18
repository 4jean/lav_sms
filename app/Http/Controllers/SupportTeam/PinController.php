<?php

namespace App\Http\Controllers\SupportTeam;

use App\Helpers\Qs;
use App\Http\Requests\Pin\PinCreate;
use App\Http\Requests\Pin\PinVerify;
use App\Repositories\PinRepo;
use App\Http\Controllers\Controller;
use App\Repositories\UserRepo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class PinController extends Controller
{
    protected  $pin, $examIsLocked, $user;

    public function __construct(PinRepo $pin, UserRepo $user)
    {
        $this->pin = $pin;
        $this->user = $user;
        $this->middleware('examIsLocked');
        $this->middleware('teamSA', ['except' => ['verify', 'enter_pin'] ]);
    }

    public function index()
    {
        $d['pin_count'] = $this->pin->countValid();
        $d['valid_pins'] = $this->pin->getValid();
        $d['used_pins'] = $this->pin->getInValid();
        return view('pages.support_team.pins.index', $d);
    }

    public function create()
    {
        if($this->pin->countValid() > 500){
            return redirect()->route('pins.index')->with('flash_danger', __('msg.pin_max'));
        }

        return view('pages.support_team.pins.create');
    }

    public function enter_pin($student_id)
    {
        if(Qs::userIsTeamSA()) {
            return redirect(route('dashboard'));
        }

        if($this->checkPinVerified($student_id))
        {
            return Session::has('marks_url') ? redirect(Session::get('marks_url')) : redirect()->route('dashboard');
        }
        $d['student'] = $this->user->find($student_id);

        return view('pages.support_team.pins.enter', $d);
    }

    public function verify(PinVerify $req, $student_id)
    {
        $user = Auth::user();
        $code = $this->pin->findValidCode($req->pin_code);
        if($code->count() < 1){
            $code = $this->pin->getUserPin($req->pin_code, $user->id, $student_id);
        }
        if($code->count() > 0 && $code->first()->times_used < 6 ){
            $code = $code->first();
            $d['times_used'] = $code->times_used + 1;
            $d['user_id'] = $user->id;
            $d['student_id'] = $student_id;
            $d['user_type'] = $user->user_type;
            $d['used'] = 1;
            $this->pin->update($code->id, $d);

            Session::put('pin_verified', $student_id);

            return Session::has('marks_url') ? redirect(Session::get('marks_url')) : redirect()->route('dashboard');
        }

        return redirect()->route('pins.enter', Qs::hash($student_id))->with('flash_danger', __('msg.pin_fail'));
    }

    public function store(PinCreate $req)
    {
        $num = $req->pin_count;
        $data = [];
        for($i = 0; $i < $num; $i++){
            $code = Str::random(5).'-'.Str::random(5).'-'.Str::random(6);
            $data[] = ['code' => strtoupper($code)];
        }

         $this->pin->create($data);
        return redirect()->route('pins.index')->with('flash_success', __('msg.pin_create'));
    }

    public function destroy()
    {
        $this->pin->deleteUsed();
        return back()->with('flash_success', 'Pins Deleted Successfully');
    }

    protected function checkPinVerified($st_id)
    {
        return Session::has('pin_verified') && Session::get('pin_verified') == $st_id;
    }

}
