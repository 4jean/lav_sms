<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use App\User;
use Eloquent;

class Receipt extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['pr_id', 'year', 'balance', 'amt_paid'];

    public function pr()
    {
        return $this->belongsTo(PaymentRecord::class, 'pr_id');
    }

}
