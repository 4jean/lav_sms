<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use Eloquent;

class Grade extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['name', 'class_type_id', 'mark_from', 'mark_to', 'remark'];
}
