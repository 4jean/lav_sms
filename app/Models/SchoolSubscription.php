<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class SchoolSubscription extends Model
{
    protected $fillable = [
        'school_id', 'plan_id', 'manual_price', 'currency', 'starts_at',
        'ends_at', 'grace_days', 'status', 'pricing_note', 'decided_by',
    ];

    protected $casts = [
        'manual_price' => 'decimal:2',
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
    ];

    public function isAccessibleAt($time = null): bool
    {
        $time = $time ? Carbon::parse($time) : now();
        $graceEnd = $this->ends_at->copy()->addDays($this->grace_days);

        return $this->status === 'active'
            && $time->greaterThanOrEqualTo($this->starts_at)
            && $time->lessThanOrEqualTo($graceEnd);
    }
}
