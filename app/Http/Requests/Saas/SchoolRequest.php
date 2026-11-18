<?php

namespace App\Http\Requests\Saas;

use App\Helpers\Qs;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SchoolRequest extends FormRequest
{
    public function authorize()
    {
        return auth()->check() && Qs::userIsSuperAdmin();
    }

    public function rules()
    {
        $schoolId = optional($this->route('school'))->id;

        return [
            'name' => 'required|string|min:2|max:150',
            'code' => [
                'required',
                'string',
                'max:50',
                'regex:/^[A-Z0-9_-]+$/',
                Rule::unique('schools', 'code')->ignore($schoolId),
            ],
            'status' => 'required|in:active,suspended,cancelled',
            'timezone' => 'required|timezone',
            'settings' => 'nullable|array',
        ];
    }

    protected function prepareForValidation()
    {
        if ($this->filled('code')) {
            $this->merge(['code' => strtoupper(trim($this->code))]);
        }
    }
}
