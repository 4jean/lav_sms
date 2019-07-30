<?php

namespace App\Repositories;

use App\Models\Dorm;

class DormRepo
{

    public function create($data)
    {
        return Dorm::create($data);
    }

    public function getAll($order = 'name')
    {
        return Dorm::orderBy($order)->get();
    }

    public function getDorm($data)
    {
        return Dorm::where($data)->get();
    }

    public function update($id, $data)
    {
        return Dorm::find($id)->update($data);
    }

    public function find($id)
    {
        return Dorm::find($id);
    }


}