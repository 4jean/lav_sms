{{--<!--NAME , CLASS AND OTHER INFO -->--}}
<table class="td-left" style="width:100%; border-collapse:collapse; ">
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
        <td><strong>CLASS AVERAGE: </strong>{{ $exr->class_ave }}</td>
    </tr>
    <tr>
        {{--<td><strong>POSITION:</strong> {!! $exr->pos ? Mk::getSuffix($exr->pos) : '' !!}</td>
        <td><strong>OUT OF:</strong> {{ Mk::countStudents($exam_id, $my_class->id, $section_id, $year) }}</td>--}}
        <td><strong>TOTAL SCORES:</strong> {{ $exr->total }}</td>
        <td><strong>STUDENT AVERAGE:</strong> {{ $exr->ave }}</td>
    </tr>

    </tbody>
</table>

{{--Exam Table--}}
<table style="width:100%; border-collapse:collapse; border: 1px solid #000; margin: 10px auto;" border="1">
    <thead>
    <tr>
        <th rowspan="2">S/N</th>
        <th rowspan="2">SUBJECTS</th>
        <th rowspan="2">TEST<br>(40)</th>
        <th rowspan="2">EXAMS<br>(60)</th>

        @if($ex->term < 3)
            <th rowspan="2">TOTAL<br>(100)</th>
        @endif

        @if($ex->term == 3) {{-- 3rd Term --}}
        <th rowspan="2">3<sup>RD</sup> <br> TERM</th>
        <th rowspan="2">1<sup>ST</sup> <br> TERM</th>
        <th rowspan="2">2<sup>ND</sup> <br> TERM</th>
        <th rowspan="2">CUM (300%) <br> 1<sup>ST</sup> + 2<sup>ND</sup> + 3<sup>RD</sup></th>
        <th rowspan="2">CUM <br> AVE</th>
        @endif

        <th rowspan="2">GRADE</th>
        <th rowspan="2">REMARKS</th>
    </tr>
    </thead>
    <tbody>
    @foreach($subjects as $sub)
        <tr>
            <td>{{ $loop->iteration }}</td>
            <td style="font-weight: bold">{{ $sub->name }}</td>
            @foreach($marks->where('subject_id', $sub->id)->where('exam_id', $ex->id) as $mk)
                <td>{{ $mk->t1 ?: '-' }}</td>
                <td>{{ $mk->exm ?: '-' }}</td>

                @if($ex->term < 3)
                    <td>{{ $ex->term == 1 ? $mk->tex1 ?: '-' : $mk->tex2 ?: '-' }}</td>
                @endif

                @if($ex->term == 3)
                    <td>{{ $mk->tex3 ?: '-' }}</td>
                    <td>{{ Mk::getSubTotalTerm($student_id, $sub->id, 1, $mk->my_class_id, $year) }}</td>
                    <td>{{ Mk::getSubTotalTerm($student_id, $sub->id, 2, $mk->my_class_id, $year) }}</td>
                    <td>{{ $mk->cum ?: '-' }}</td>
                    <td>{{ $mk->cum_ave ?: '-' }}</td>
                @endif

                <td>{{ $mk->grade ? $mk->grade->name : '-' }}</td>
                <td>{{ $mk->grade ? $mk->grade->remark : '-' }}</td>
            @endforeach
        </tr>
    @endforeach
{{--    <tr>
        <td colspan="3"><strong>TOTAL SCORES OBTAINED: </strong> {{ $exr->total }}</td>
        <td colspan="2"><strong>FINAL AVERAGE: </strong> {{ $exr->ave }}</td>
        <td colspan="2"><strong>CLASS AVERAGE: </strong> {{ $exr->class_ave }}</td>
    </tr>--}}
    </tbody>
</table>

{{--Key to Grading--}}
<div style="margin-bottom: 5px; text-align: center">
    <table border="0" cellpadding="5" cellspacing="5" style="text-align: center; margin: 0 auto;">
        <tr>
            <td><strong>KEY TO THE GRADING</strong></td>
            @if(Mk::getGradeList($class_type->id)->count())
                @foreach(Mk::getGradeList($class_type->id) as $gr)
                    <td><strong>{{ $gr->name }}</strong>
                        => {{ $gr->mark_from.' - '.$gr->mark_to }}
                    </td>
                @endforeach
            @endif
        </tr>
    </table>

</div>

{{--Sheet Bottom Details--}}
@if($ex->term == 3)
<table class="td-left" style="width:100%; border-collapse:collapse; ">
    <tbody>
    <tr>
        <td><strong> {!! strtoupper(Mk::getSuffix(1)) !!} TERM'S AVERAGE: </strong> {{ Mk::getTermAverage($student_id, 1, $year) }}</td>
        <td><strong> {!! strtoupper(Mk::getSuffix(2)) !!} TERM'S AVERAGE: </strong> {{ Mk::getTermAverage($student_id, 2, $year) }}</td>
        <td><strong> {!! strtoupper(Mk::getSuffix(3)) !!} TERM'S AVERAGE: </strong> {{ Mk::getTermAverage($student_id, 3, $year) }}</td>
    </tr>
    <tr>
        <td><strong>CUMULATIVE AVERAGE:</strong> {{ $exr->ave }}</td>
{{--        <td><strong>POSITION FOR THE SESSION:</strong> {!! $exr->pos ? Mk::getSuffix($exr->pos) : '' !!}</td>--}}
    </tr>

    </tbody>
</table>
@endif

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
            <td><strong>HEAD TEACHER'S COMMENT:</strong></td>
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
