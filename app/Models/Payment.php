<?php

namespace App\Models;

use Eloquent;

class Payment extends Eloquent
{
    protected $fillable = ['title', 'amount', 'my_class_id', 'description', 'year', 'ref_no'];

    public function my_class()
    {
        return $this->belongsTo(MyClass::class);
    }
}
