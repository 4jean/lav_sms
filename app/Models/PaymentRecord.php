<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use App\User;
use Eloquent;

class PaymentRecord extends Eloquent
{
    use BelongsToSchool;
    protected $fillable =['student_id', 'payment_id', 'amt_paid', 'year', 'paid', 'balance', 'ref_no'];

    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }

    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }

    public function receipt()
    {
        return $this->hasMany(Receipt::class, 'pr_id');
    }
}
