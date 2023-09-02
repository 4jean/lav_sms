<?php

namespace App\Http\Controllers;

use App\Helpers\Qs;
use App\Repositories\LocationRepo;
use App\Repositories\MyClassRepo;
use Illuminate\Support\Facades\Auth;

class AjaxController extends Controller
{
    protected $loc, $my_class;

    public function __construct(LocationRepo $loc, MyClassRepo $my_class)
    {
        $this->loc = $loc;
        $this->my_class = $my_class;
    }

    public function get_district($province_id)
    {
//        $province_id = Qs::decodeHash($province_id);
//        return ['id' => Qs::hash($q->id), 'name' => $q->name];

        $districts = $this->loc->getDistricts($province_id);
        return $data = $districts->map(function($q){
            return ['id' => $q->id, 'name' => $q->name];
        })->all();
    }

    public function get_local($district_id)
    {
//        $district_id = Qs::decodeHash($district_id);
//        return ['id' => Qs::hash($q->id), 'name' => $q->name];

        $locals = $this->loc->getLocals($district_id);
        return $data = $locals->map(function($q){
            return ['id' => $q->id, 'name' => $q->name];
        })->all();
    }

    public function get_class_sections($class_id)
    {
        $sections = $this->my_class->getClassSections($class_id);
        return $sections = $sections->map(function($q){
            return ['id' => $q->id, 'name' => $q->name];
        })->all();
    }

    public function get_class_subjects($class_id)
    {
        $sections = $this->my_class->getClassSections($class_id);
        $subjects = $this->my_class->findSubjectByClass($class_id);

        if(Qs::userIsTeacher()){
            $subjects = $this->my_class->findSubjectByTeacher(Auth::user()->id)->where('my_class_id', $class_id);
        }

        $d['sections'] = $sections->map(function($q){
            return ['id' => $q->id, 'name' => $q->name];
        })->all();
        $d['subjects'] = $subjects->map(function($q){
            return ['id' => $q->id, 'name' => $q->name];
        })->all();

        return $d;
    }

}
