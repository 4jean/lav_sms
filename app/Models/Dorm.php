<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use Eloquent;

class Dorm extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['name', 'description'];
}
