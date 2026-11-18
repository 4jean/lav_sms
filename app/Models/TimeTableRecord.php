<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use Eloquent;

class TimeTableRecord extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['name', 'my_class_id', 'exam_id', 'year'];

    public function my_class()
    {
        return $this->belongsTo(MyClass::class);
    }

    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }
}
