{{--<!--NAME , CLASS AND OTHER INFO -->--}}
<table style="width:100%; border-collapse:collapse; ">
    <tbody>
    <tr>
        <td><strong>NAME:</strong> {{ strtoupper($sr->user->name) }}</td>
        <td><strong>ADM NO:</strong> {{ $sr->adm_no }}</td>
        <td><strong>HOUSE:</strong> {{ strtoupper($sr->house) }}</td>
        <td><strong>CLASS:</strong> {{ strtoupper($my_class->name) }}</td>
    </tr>
    <tr>
        <td><strong>REPORT FOR</strong> {!! strtoupper(Mk::getSuffix($ex->term)) !!} TERM </td>
        <td><strong>ACADEMIC YEAR:</strong> {{ $ex->year }}</td>
        <td><strong>AGE:</strong> {{ $sr->age ?: ($sr->user->dob ? date_diff(date_create($sr->user->dob), date_create('now'))->y : '-') }} </td>
    </tr>

    </tbody>
</table>

{{--Exam Table--}}
<table style="width:100%; border-collapse:collapse; border: 1px solid #000; margin: 10px auto;" border="1">
    <thead>
    <tr>
        <th rowspan="2">SUBJECTS</th>
        <th colspan="4">CONTINUOUS ASSESSMENT</th>
        <th rowspan="2">EXAM (70)</th>
        @if($ex->term < 3) {{-- 1st & 2nd Term--}}
        <th rowspan="2">FINAL MARKS <br> (100%)</th>
        <th rowspan="2">GRADE</th>
        <th rowspan="2">SUBJECT <br> POSITION</th>
        @endif
        @if($ex->term == 3) {{-- 3rd Term --}}
        <th rowspan="2">FINAL MARKS <br>(100%) 3<sup>RD</sup> TERM</th>
        <th rowspan="2">1<sup>ST</sup> <br> TERM</th>
        <th rowspan="2">2<sup>ND</sup> <br> TERM</th>
        <th rowspan="2">CUM (300%) <br> 1<sup>ST</sup> + 2<sup>ND</sup> + 3<sup>RD</sup></th>
        <th rowspan="2">CUM AVE</th>
        <th rowspan="2">GRADE</th>
        @endif
        <th rowspan="2">REMARKS</th>
    </tr>
    <tr>
        <th>CA(5)</th>
        <th>MID(15)</th>
        <th>CA(10)</th>
        <th>TOTAL(30)</th>
    </tr>
    </thead>
    <tbody>
    @foreach($subjects as $sub)
        <tr>
            <td style=" font-weight: bold">{{ $sub->name }}</td>
            @foreach($marks->where('subject_id', $sub->id)->where('exam_id', $ex->id) as $mk)
                <td>{{ $mk->t1 ?: '-' }}</td>
                <td>{{ $mk->t2 ?: '-' }}</td>
                <td>{{ $mk->t3 ?: '-' }}</td>
                <td>{{ $mk->tca ?: '-' }}</td>
                <td>{{ $mk->exm ?: '-' }}</td>

                @if($ex->term < 3)
                    <td>{{ $ex->term == 1 ? $mk->tex1 ?: '-' : $mk->tex2 ?: '-' }}</td>
                    <td>{{ $mk->grade ? $mk->grade->name : '-' }}</td>
                    <td>{!! ($mk->grade) ? Mk::getSuffix($mk->sub_pos) : '-' !!}</td>
                    <td>{{ $mk->grade ? $mk->grade->remark : '-' }}</td>
                @endif

                @if($ex->term == 3)
                    <td>{{ $mk->tex3 ?: '-' }}</td>
                    <td>{{ Mk::getSubTotalTerm($student_id, $sub->id, 1, $mk->my_class_id, $year) }}</td>
                    <td>{{ Mk::getSubTotalTerm($student_id, $sub->id, 2, $mk->my_class_id, $year) }}</td>
                    <td>{{ $mk->cum ?: '-' }}</td>
                    <td>{{ $mk->cum_ave ?: '-' }}</td>
                    <td>{{ $mk->grade ? $mk->grade->name : '-' }}</td>
                    <td>{{ $mk->grade ? $mk->grade->remark : '-' }}</td>
                @endif

            @endforeach
        </tr>
    @endforeach
    <tr>
        <td colspan="{{ $ex->term < 3 ? 4 : 6 }}"><strong>TOTAL SCORES OBTAINED: </strong> {{ $exr->total }}</td>
        <td colspan="{{ $ex->term < 3 ? 3 : 4 }}"><strong>FINAL AVERAGE: </strong> {{ $exr->ave }}</td>
        <td colspan="{{ $ex->term < 3 ? 3 : 3 }}"><strong>CLASS AVERAGE: </strong> {{ $exr->class_ave }}</td>
    </tr>
    </tbody>
</table>

{{--Key to Grading--}}
<div style="margin-bottom: 5px; text-align: center">
    <table border="0" cellpadding="5" cellspacing="5" style="text-align: center; margin: 0 auto;">
        <tr>
            <td><strong>KEY TO THE GRADING</strong></td>
            @if(Mk::getGradeList($class_type->id)->count())
                @foreach(Mk::getGradeList($class_type->id) as $gr)
                    <td><strong>{{ $gr->name }}:</strong> {{ $gr->mark_from.'-'.$gr->mark_to }} </td>
                @endforeach
            @endif
        </tr>
    </table>

</div>


<table style="width:100%; border-collapse:collapse; ">
    <tbody>
    <tr>
        <td><strong>NUMBER OF : </strong></td>
        <td><strong>Distinctions:</strong> {{ Mk::countDistinctions($marks) }}</td>
        <td><strong>Credits:</strong> {{ Mk::countCredits($marks) }}</td>
        <td><strong>Passes:</strong> {{ Mk::countPasses($marks) }}</td>
        <td><strong>Failures:</strong> {{ Mk::countFailures($marks) }}</td>
        <td><strong>Subjects Offered:</strong> {{ Mk::countSubjectsOffered($marks) }}</td>
    </tr>

    </tbody>
</table>

{{-- TRAITS - PSCHOMOTOR & AFFECTIVE --}}
<div>
    {{--KEYS TO RATING--}}
    <div style="float: left">
        <br>
        <strong style="text-decoration: underline;">KEY</strong> <br>
        <span>5 - Excellent</span> <br>
        <span>4 - Very Good</span> <br>
        <span>3 - Good</span> <br>
        <span>2 - Fair</span> <br>
        <span>1 - Poor</span> <br>
    </div>

    <table align="left" style="width:40%; border-collapse:collapse; border: 1px solid #000; margin:10px 20px;" border="1">
        <thead>
        <tr>
            <td><strong>AFFECTIVE TRAITS</strong></td>
            <td><strong>RATING</strong></td>
        </tr>
        </thead>
        <tbody>
        @foreach ($skills->where('skill_type', 'AF') as $af)
            <tr>
                <td>{{ $af->name }}</td>
                <td>{{ $exr->af ? explode(',', $exr->af)[$loop->index] : '' }}</td>
            </tr>
        @endforeach
        </tbody>
    </table>

    <table align="left" style="width:35%; border-collapse:collapse;border: 1px solid #000;  margin: 10px 20px;" border="1">
        <thead>
        <tr>
            <td><strong>PSYCHOMOTOR</strong></td>
            <td><strong>RATING</strong></td>
        </tr>
        </thead>
        <tbody>
        @foreach ($skills->where('skill_type', 'PS') as $ps)
            <tr>
                <td>{{ $ps->name }}</td>
                <td>{{ $exr->ps ? explode(',', $exr->ps)[$loop->index] : '' }}</td>
            </tr>
        @endforeach
        </tbody>
    </table>

</div>

{{--    COMMENTS & SIGNATURE    --}}
<div style="margin-top: 10px; clear: both;"></div>
<div style="margin-top:15px;">
    <table class="td-left" style="border-collapse:collapse;">
        <tbody>
        <tr>
            <td><strong>CLASS TEACHER'S COMMENT:</strong></td>
            <td>  {{ $exr->t_comment }}</td>
        </tr>
        <tr>
            <td><strong>PRINCIPAL'S COMMENT:</strong></td>
            <td>  {{ $exr->p_comment }}</td>
        </tr>
        <tr>
            <td><strong>NEXT TERM BEGINS:</strong></td>
            <td>{{ date('l\, jS F\, Y', strtotime($s['term_begins'])) }}</td>
        </tr>
        <tr>
            <td><strong>NEXT TERM FEES:</strong></td>
            <td><del style="text-decoration-style: double">N</del>{{ $s['nt_fee_'.strtolower($ct)] }}</td>
        </tr>
        </tbody>
    </table>
</div>
