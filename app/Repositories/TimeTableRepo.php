<?php

namespace App\Repositories;

use App\models\TimeSlot;
use App\models\TimeTable;
use App\models\TimeTableRecord;

class TimeTableRepo
{

    public function getTimeTable($where)
    {
        return TimeTable::with(['subject', 'time_slot'])->orderBy('timestamp_from')->where($where)->get();
    }

    public function create($data)
    {
        return TimeTable::create($data);
    }

    public function update($id, $data)
    {
        return TimeTable::find($id)->update($data);
    }

    public function delete($id)
    {
        return TimeTable::destroy($id);
    }

    /************* TIME SLOTS ***********/

    public function getTimeSlot($where)
    {
        return TimeSlot::orderBy('timestamp_from')->where($where);
    }

    public function getTimeSlotByTTR($ttr_id)
    {
        return $this->getTimeSlot(['ttr_id' => $ttr_id])->get();
    }

    protected function getDistinctTTR($remove_ttr = NULL)
    {
        return $remove_ttr ? TimeSlot::where('ttr_id', '<>', $remove_ttr)->distinct()->select('ttr_id')->pluck('ttr_id') : TimeSlot::distinct()->select('ttr_id')->pluck('ttr_id');
    }

    public function getExistingTS($remove_ttr = NULL)
    {
        $ids  = $this->getDistinctTTR($remove_ttr);
        return $this->getTTRByIDs($ids);
    }

    public function createTimeSlot($data)
    {
        return TimeSlot::create($data);
    }

    public function deleteTimeSlot($id)
    {
        return TimeSlot::destroy($id);
    }

    public function deleteTimeSlots($where)
    {
        return TimeSlot::where($where)->delete();
    }

    public function updateTimeSlot($id, $data)
    {
        return TimeSlot::find($id)->update($data);
    }

    public function findTimeSlot($id)
    {
        return TimeSlot::findOrFail($id);
    }


    /************* TT RECORDS ***********/

    public function getAllRecords()
    {
        return TimeTableRecord::orderBy('created_at')->with(['my_class', 'exam'])->get();
    }

    public function getTTRByIDs($ids)
    {
        return TimeTableRecord::orderBy('name')->whereIn('id', $ids)->get();
    }

    public function getRecord($where)
    {
        return TimeTableRecord::where($where)->get();
    }

    public function createRecord($data)
    {
        return TimeTableRecord::create($data);
    }

    public function updateRecord($id, $data)
    {
        return TimeTableRecord::find($id)->update($data);
    }

    public function deleteRecord($id)
    {
        return TimeTableRecord::destroy($id);
    }

    public function findRecord($id)
    {
        return TimeTableRecord::findOrFail($id);
    }
}