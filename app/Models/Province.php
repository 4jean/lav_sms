<?php

namespace App\Models;

use Eloquent;

class Province extends Eloquent
{
    public function ministry()
    {
       // return $this->hasMany(Ministry::class);
    }
}
