<?php

namespace App\Repositories;

use App\Models\Exam;
use App\Models\ExamRecord;
use App\Models\Grade;
use App\Models\Mark;
use App\Models\Skill;

class ExamRepo
{

    public function all()
    {
        return Exam::orderBy('name', 'asc')->orderBy('year', 'desc')->get();
    }

    public function getExam($data)
    {
        return Exam::where($data)->get();
    }

    public function find($id)
    {
        return Exam::find($id);
    }

    public function create($data)
    {
        return Exam::create($data);
    }

    public function createRecord($data)
    {
        return ExamRecord::firstOrCreate($data);
    }

    public function update($id, $data)
    {
        return Exam::find($id)->update($data);
    }

    public function updateRecord($where, $data)
    {
        return ExamRecord::where($where)->update($data);
    }

    public function getRecord($data)
    {
        return ExamRecord::where($data)->get();
    }

    public function findRecord($id)
    {
        return ExamRecord::find($id);
    }

    public function delete($id)
    {
        return Exam::destroy($id);
    }

    /*********** Grades ***************/

    public function allGrades()
    {
        return Grade::orderBy('name')->get();
    }

    public function getGrade($data)
    {
        return Grade::where($data)->get();
    }

    public function findGrade($id)
    {
        return Grade::find($id);
    }

    public function createGrade($data)
    {
        return Grade::create($data);
    }

    public function updateGrade($id, $data)
    {
        return Grade::find($id)->update($data);
    }

    public function deleteGrade($id)
    {
        return Grade::destroy($id);
    }

    /*********** Marks ***************/

    public function createMark($data)
    {
        return Mark::firstOrCreate($data);
    }

    public function destroyMark($id)
    {
        return Mark::destroy($id);
    }

    public function updateMark($id, $data)
    {
        return Mark::find($id)->update($data);
    }

    public function getExamYears($student_id)
    {
        return Mark::where('student_id', $student_id)->select('year')->distinct()->get();
    }

    public function getMark($data)
    {
        return Mark::where($data)->with('grade')->get();
    }

    /*********** Skills ***************/

    public function getSkill($where)
    {
        return Skill::where($where)->orderBy('name')->get();
    }

    public function getSkillByClassType($class_type, $skill_type = NULL)
    {
        return $skill_type
            ? $this->getSkill(['class_type' => $class_type, 'skill_type' => $skill_type])
            : $this->getSkill(['class_type' => $class_type]);
    }

}
