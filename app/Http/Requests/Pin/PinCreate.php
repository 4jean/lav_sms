<?php

namespace App\Http\Requests\Pin;

use Illuminate\Foundation\Http\FormRequest;

class PinCreate extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'pin_count' => 'required|numeric|min:10|max:500',
        ];
    }

    public function attributes()
    {
        return  [
            'pin_count' => 'Pin Amount',
        ];
    }

}
