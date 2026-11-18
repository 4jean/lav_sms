<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class School extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'code', 'status', 'timezone', 'settings'];
    protected $casts = ['settings' => 'array'];

    public function subscriptions()
    {
        return $this->hasMany(SchoolSubscription::class);
    }
}
