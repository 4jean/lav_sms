<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use Eloquent;

class TimeSlot extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['ttr_id', 'timestamp_from', 'timestamp_to', 'full', 'time_from', 'time_to', 'hour_from', 'min_from', 'meridian_from', 'hour_to', 'min_to', 'meridian_to'];

    public function tt_record()
    {
        return $this->belongsTo(TimeTableRecord::class, 'ttr_id');
    }
}
