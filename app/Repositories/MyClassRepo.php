<?php

namespace App\Repositories;

use App\Models\ClassType;
use App\Models\MyClass;
use App\Models\Section;
use App\Models\Subject;

class MyClassRepo
{

    public function all()
    {
        return MyClass::orderBy('name', 'asc')->with('class_type')->get();
    }

    public function getMC($data)
    {
        return MyClass::where($data)->with('section');
    }

    public function find($id)
    {
        return MyClass::find($id);
    }

    public function create($data)
    {
        return MyClass::create($data);
    }

    public function update($id, $data)
    {
        return MyClass::find($id)->update($data);
    }

    public function delete($id)
    {
        return MyClass::destroy($id);
    }

    public function getTypes()
    {
        return ClassType::orderBy('name', 'asc')->get();
    }

    public function findType($class_type_id)
    {
        return ClassType::find($class_type_id);
    }

    public function findTypeByClass($class_id)
    {
        return ClassType::find($this->find($class_id)->class_type_id);
    }

    /************* Section *******************/

    public function createSection($data)
    {
        return Section::create($data);
    }

    public function findSection($id)
    {
        return Section::find($id);
    }

    public function updateSection($id, $data)
    {
        return Section::find($id)->update($data);
    }

    public function deleteSection($id)
    {
        return Section::destroy($id);
    }

    public function isActiveSection($section_id)
    {
        return Section::where(['id' => $section_id, 'active' => 1])->exists();
    }

    public function getAllSections()
    {
        return Section::orderBy('name', 'asc')->with(['my_class', 'teacher'])->get();
    }

    public function getClassSections($class_id)
    {
        return Section::where(['my_class_id' => $class_id])->orderBy('name', 'asc')->get();
    }

    /************* Subject *******************/

    public function createSubject($data)
    {
        return Subject::create($data);
    }

    public function findSubject($id)
    {
        return Subject::find($id);
    }

    public function findSubjectByClass($class_id, $order_by = 'name')
    {
        return $this->getSubject(['my_class_id'=> $class_id])->orderBy($order_by)->get();
    }

    public function findSubjectByTeacher($teacher_id, $order_by = 'name')
    {
        return $this->getSubject(['teacher_id'=> $teacher_id])->orderBy($order_by)->get();
    }

    public function getSubject($data)
    {
        return Subject::where($data);
    }

    public function getSubjectsByIDs($ids)
    {
        return Subject::whereIn('id', $ids)->orderBy('name')->get();
    }

    public function updateSubject($id, $data)
    {
        return Subject::find($id)->update($data);
    }

    public function deleteSubject($id)
    {
        return Subject::destroy($id);
    }

    public function getAllSubjects()
    {
        return Subject::orderBy('name', 'asc')->with(['my_class', 'teacher'])->get();
    }

}