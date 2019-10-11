@foreach($exams as $ex)
    @foreach($exam_records->where('exam_id', $ex->id) as $exr)

        @if(!Qs::userIsTeacher())
            <div class="card">
            <div class="card-header header-elements-inline">
                <h6 class="font-weight-bold">{{ $ex->name.' - '.$ex->year }}</h6>
                {!! Qs::getPanelOptions() !!}
            </div>

            <div class="card-body collapse">
                <table class="table table-bordered table-responsive text-center">
                    <thead>
                    <tr>
                        <th rowspan="2">S/N</th>
                        <th rowspan="2">SUBJECTS</th>
                        <th rowspan="2">CA1<br>(10)</th>
                        <th rowspan="2">CA2<br>(10)</th>
                        <th rowspan="2">MID<br>TEST(20)</th>
                        <th rowspan="2">EXAMS<br>(60)</th>

                    @if($ex->term < 3) {{-- 1st & 2nd Term--}}
                        <th rowspan="2">TOTAL<br>(100)</th>
                    @endif

                    @if($ex->term == 3) {{-- 3rd Term --}}
                        <th rowspan="2">TOTAL <br>(100%) 3<sup>RD</sup> TERM</th>
                        <th rowspan="2">1<sup>ST</sup> <br> TERM</th>
                        <th rowspan="2">2<sup>ND</sup> <br> TERM</th>
                        <th rowspan="2">CUM (300%) <br> 1<sup>ST</sup> + 2<sup>ND</sup> + 3<sup>RD</sup></th>
                        <th rowspan="2">CUM AVE</th>
                    @endif

                        <th rowspan="2">GRADE</th>
                        <th rowspan="2">SUBJECT <br> POSITION</th>
                        <th rowspan="2">REMARKS</th>
                    </tr>
                    </thead>

                    <tbody>
                    @foreach($subjects as $sub)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $sub->name }}</td>
                            @foreach($marks->where('subject_id', $sub->id)->where('exam_id', $ex->id) as $mk)
                                <td>{{ $mk->t1 ?: '-' }}</td>
                                <td>{{ $mk->t2 ?: '-' }}</td>
                                <td>{{ $mk->t3 ?: '-' }}</td>
                                <td>{{ $mk->exm ?: '-' }}</td>

                                @if($ex->term < 3)
                                    <td>{{ $ex->term == 1 ? $mk->tex1 ?: '-' : $mk->tex2 ?: '-' }}</td>
                                @endif

                            {{--3rd Term--}}
                                @if($ex->term == 3)
                                    <td>{{ $mk->tex3 ?: '-' }}</td>
                                    <td>{{ Mk::getSubTotalTerm($student_id, $sub->id, 1, $mk->my_class_id, $year) }}</td>
                                    <td>{{ Mk::getSubTotalTerm($student_id, $sub->id, 2, $mk->my_class_id, $year) }}</td>
                                    <td>{{ $mk->cum ?: '-' }}</td>
                                    <td>{{ $mk->cum_ave ?: '-' }}</td>
                                @endif

                            {{--Grade, Subject Position & Remarks--}}
                                <td>{{ $mk->grade ? $mk->grade->name : '-' }}</td>
                                <td>{!! ($mk->grade) ? Mk::getSuffix($mk->sub_pos) : '-' !!}</td>
                                <td>{{ $mk->grade ? $mk->grade->remark : '-' }}</td>
                            @endforeach
                        </tr>
                    @endforeach
                    <tr>
                        <td colspan="5"><strong>TOTAL SCORES OBTAINED: </strong> {{ $exr->total }}</td>
                        <td colspan="{{ $ex->term < 3 ? 3 : 4 }}"><strong>FINAL AVERAGE: </strong> {{ $exr->ave }}</td>
                        <td colspan="{{ $ex->term < 3 ? 2 : 5 }}"><strong>CLASS AVERAGE: </strong> {{ $exr->class_ave }}</td>
                    </tr>
                    </tbody>
                </table>
                {{--Print Button--}}
                <div class="text-center mt-3">
                    <a target="_blank" href="{{ route('marks.print', [Qs::hash($student_id), $ex->id, $year]) }}" class="btn btn-secondary btn-lg">Print Marksheet <i class="icon-printer ml-2"></i></a>
                </div>
            </div>
        </div>
        @endif

        @if(Qs::userIsTeamSAT())
        {{--    EXAM COMMENTS   --}}
        <div class="card">
            <div class="card-header header-elements-inline bg-dark">
                <h6 class="card-title font-weight-bold">Exam Comments</h6>
                {!! Qs::getPanelOptions() !!}
            </div>

            <div class="card-body collapse">
                <form class="ajax-update" method="post" action="{{ route('marks.comment_update', $exr->id) }}">
                    @csrf @method('PUT')

                    @if(Qs::userIsTeamSAT())
                        <div class="form-group row">
                            <label class="col-lg-2 col-form-label font-weight-semibold">Teacher's Comment</label>
                            <div class="col-lg-10">
                                <input name="t_comment" value="{{ $exr->t_comment }}"  type="text" class="form-control" placeholder="Teacher's Comment">
                            </div>
                        </div>
                    @endif

                    @if(Qs::userIsTeamSA())
                        <div class="form-group row">
                            <label class="col-lg-2 col-form-label font-weight-semibold">Head Teacher's Comment</label>
                            <div class="col-lg-10">
                                <input name="p_comment" value="{{ $exr->p_comment }}"  type="text" class="form-control" placeholder="Head Teacher's Comment">
                            </div>
                        </div>
                    @endif

                    <div class="text-right">
                        <button type="submit" class="btn btn-primary">Submit form <i class="icon-paperplane ml-2"></i></button>
                    </div>
                </form>
            </div>
        </div>
        @endif

    @endforeach
@endforeach
