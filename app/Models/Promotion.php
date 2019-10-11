<?php

namespace App\Models;

use App\User;
use Eloquent;

class Promotion extends Eloquent
{
    protected $fillable = ['from_class', 'from_section', 'to_class', 'to_section', 'grad', 'student_id', 'from_session', 'to_session', 'status'];

    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }

    public function fc()
    {
        return $this->belongsTo(MyClass::class, 'from_class');
    }

    public function fs()
    {
        return $this->belongsTo(Section::class, 'from_section');
    }

    public function ts()
    {
        return $this->belongsTo(Section::class, 'to_section');
    }

    public function tc()
    {
        return $this->belongsTo(MyClass::class, 'to_class');
    }
}
