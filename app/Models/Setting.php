<?php

namespace App\Models;

use Eloquent;

class Setting extends Eloquent
{
    protected $fillable = ['type', 'description'];
}
