<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use Eloquent;

class Exam extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['name', 'term', 'year'];
}
