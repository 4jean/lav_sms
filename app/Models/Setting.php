<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use Eloquent;

class Setting extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['type', 'description'];
}
