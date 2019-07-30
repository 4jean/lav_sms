<?php

namespace App\Models;

use App\User;
use Eloquent;

class Pin extends Eloquent
{
    protected $fillable = ['code', 'user_id', 'student_id', 'times_used', 'used'];

    public function user($foreign = NULL)
    {
        return $this->belongsTo(User::class, $foreign);
    }

    public function student()
    {
        return $this->user('student_id');
    }

}
