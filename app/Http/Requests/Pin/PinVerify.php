<?php

namespace App\Http\Requests\Pin;

use Illuminate\Foundation\Http\FormRequest;

class PinVerify extends FormRequest
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
            'pin_code' => 'required|exists:pins,code',
        ];
    }

    public function attributes()
    {
        return  [
            'pin_code' => 'Pin Code',
        ];
    }

}
