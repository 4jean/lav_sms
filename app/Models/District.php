<?php

namespace App\Models;

use Eloquent;

class District extends Eloquent
{
    public function ministry()
    {
       // return $this->hasMany(Ministry::class);
    }
}
