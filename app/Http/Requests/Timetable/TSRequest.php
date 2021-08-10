<?php

namespace App\Http\Requests\TimeTable;

use Illuminate\Foundation\Http\FormRequest;

class TSRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     * @return array
     */
    public function rules()
    {
        return [
            'ttr_id' => 'required|exists:time_table_records,id',
            'hour_from' => 'required|numeric|between:1,12',
            'min_from' => 'required|string|size:2',
            'meridian_from' => 'required|string|size:2',
            'hour_to' => 'required|numeric|between:1,12',
            'min_to' => 'required|string|size:2',
            'meridian_to' => 'required|string|size:2',
        ];
    }

    public function attributes()
    {
        return  [
            'ttr_id' => 'TimeTable Record',
            'hour_from' => 'Start Hour',
            'min_from' => 'Start Minute',
            'meridian_from' => 'Start Meridian',
            'hour_to' => 'End Hour',
            'min_to' => 'End Minute',
            'meridian_to' => 'End Meridian',
        ];
    }

}
