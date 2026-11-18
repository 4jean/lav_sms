<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use App\User;
use Eloquent;

class StaffRecord extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['code', 'emp_date', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
