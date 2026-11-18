<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use App\User;
use Eloquent;

class Subject extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['name', 'my_class_id', 'teacher_id', 'slug'];

    public function my_class()
    {
        return $this->belongsTo(MyClass::class);
    }

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }
}
