<?php

namespace App\Http\Requests\MyClass;

use Illuminate\Foundation\Http\FormRequest;

class ClassCreate extends FormRequest
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
            'name' => 'required|string|min:3',
            'class_type_id' => 'required|exists:class_types,id',
        ];
    }

    public function attributes()
    {
        return  [
            'class_type_id' => 'Class Type',
        ];
    }

}
