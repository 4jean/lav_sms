<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use Eloquent;

class MyClass extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['name', 'class_type_id'];

    public function section()
    {
        return $this->hasMany(Section::class);
    }

    public function class_type()
    {
        return $this->belongsTo(ClassType::class);
    }

    public function student_record()
    {
        return $this->hasMany(StudentRecord::class);
    }
}
