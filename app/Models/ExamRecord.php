<?php

namespace App\Models;

use App\Models\Concerns\BelongsToSchool;

use Eloquent;

class ExamRecord extends Eloquent
{
    use BelongsToSchool;
    protected $fillable = ['exam_id', 'my_class_id', 'student_id', 'section_id', 'af', 'af_id', 'ps', 'ps_id','t_comment', 'p_comment', 'year', 'total', 'ave', 'class_ave', 'pos'];
}
