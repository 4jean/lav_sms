<?php

namespace App\Http\Requests\Student;

use Illuminate\Foundation\Http\FormRequest;
use App\Helpers\Qs;

class StudentRecordCreate extends FormRequest
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
            'name' => 'required|string|min:6|max:150',
            'adm_no' => 'sometimes|nullable|alpha_num|min:3|max:150|unique:student_records',
            'gender' => 'required|string',
            'year_admitted' => 'required|string',
            'phone' => 'sometimes|nullable|string|min:6|max:20',
            'email' => 'sometimes|nullable|email|max:100|unique:users',
            'photo' => 'sometimes|nullable|image|mimes:jpeg,gif,png,jpg|max:2048',
            'address' => 'required|string|min:6|max:120',
            'bg_id' => 'sometimes|nullable',
            'province_id' => 'required',
            'district_id' => 'required',
            'ward' => 'required',
            'my_class_id' => 'required',
            'section_id' => 'required',
            'my_parent_id' => 'sometimes|nullable',
        ];
    }

    public function attributes()
    {
        return  [
            'section_id' => 'Section',
            'my_class_id' => 'Class',
            'province_id' => 'Province',
            'district_id' => 'District',
            'bg_id' => 'Blood Group',
            'my_parent_id' => 'Parent',
        ];
    }

    protected function getValidatorInstance()
    {
        $input = $this->all();

        $input['my_parent_id'] = $input['my_parent_id'] ? Qs::decodeHash($input['my_parent_id']) : NULL;

        $this->getInputSource()->replace($input);

        return parent::getValidatorInstance();
    }
}
