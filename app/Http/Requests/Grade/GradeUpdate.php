<?php

namespace App\Http\Requests\Grade;

use Illuminate\Foundation\Http\FormRequest;

class GradeUpdate extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string',
            'mark_from' => 'required|numeric',
            'mark_to' => 'required|numeric',
        ];
    }

    public function attributes()
    {
        return  [
            'mark_from' => 'Mark From',
            'mark_to' => 'Mark To',
        ];
    }
}
