<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use Eloquent;

class Skill extends Eloquent
{
    use BelongsToSchool;
    //protected  $fillable = ['name', 'skill_type', 'class_type'];
}
