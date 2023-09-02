<?php

namespace App\Repositories;

use App\Models\Nationality;
use App\Models\Province;
use App\Models\District;
use App\Models\Local;

class LocationRepo
{
    public function getProvinces()
    {
        return Province::all();
    }

    public function getAllProvinces()
    {
        return Province::orderBy('name', 'asc')->get();
    }

    public function getAllNationals()
    {
        return Nationality::orderBy('name', 'asc')->get();
    }

    public function getDistricts($province_id)
    {
        return District::where('province_id', $province_id)->orderBy('name', 'asc')->get();
    }

    public function getLocals($district_id)
    {
        return Local::where('district_id', $district_id)->orderBy('name', 'asc')->get();
    }

}