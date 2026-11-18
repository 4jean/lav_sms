<?php

namespace App\Http\Requests\Saas;

use Illuminate\Foundation\Http\FormRequest;

class SchoolSubscriptionRequest extends FormRequest
{
    public function authorize()
    {
        return auth()->check() && \App\Helpers\Qs::userIsSuperAdmin();
    }

    public function rules()
    {
        return [
            'school_id' => 'required|exists:schools,id',
            'plan_id' => 'nullable|exists:plans,id',
            'manual_price' => 'required|numeric|min:0',
            'currency' => 'required|string|size:3',
            'starts_at' => 'required|date',
            'ends_at' => 'required|date|after:starts_at',
            'grace_days' => 'nullable|integer|min:0|max:90',
            'status' => 'required|in:active,suspended,cancelled',
            'pricing_note' => 'nullable|string|max:1000',
            'module_ids' => 'nullable|array',
            'module_ids.*' => 'integer|exists:modules,id',
        ];
    }
}
