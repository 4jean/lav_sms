<?php

namespace App\Models;

use Eloquent;

class TimeSlot extends Eloquent
{
    protected $fillable = ['ttr_id', 'timestamp_from', 'timestamp_to', 'full', 'time_from', 'time_to', 'hour_from', 'min_from', 'meridian_from', 'hour_to', 'min_to', 'meridian_to'];

    public function tt_record()
    {
        return $this->belongsTo(TimeTableRecord::class, 'ttr_id');
    }
}
