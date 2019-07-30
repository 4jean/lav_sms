<?php

namespace App\Helpers;

use App\Models\PaymentRecord;

class Pay
{
    public static function getYears($st_id)
    {
        return PaymentRecord::where(['student_id' => $st_id])->pluck('year')->unique();
    }

    public static function genRefCode()
    {
        return date('Y').'/'.mt_rand(10000, 999999);
    }
}