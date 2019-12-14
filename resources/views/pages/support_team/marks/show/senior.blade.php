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
                        <th>CA(15)</th>
                        <th>CA(10)</th>
                        <th>TOTAL(30)</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($subjects as $sub)
                        <tr>
                            <td>{{ $sub->name }}</td>
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
                            <label class="col-lg-2 col-form-label font-weight-semibold">Principal's Comment</label>
                            <div class="col-lg-10">
                                <input name="p_comment" value="{{ $exr->p_comment }}"  type="text" class="form-control" placeholder="Principal's Comment">
                            </div>
                        </div>
                    @endif

                    <div class="text-right">
                        <button type="submit" class="btn btn-primary">Submit form <i class="icon-paperplane ml-2"></i></button>
                    </div>
                </form>
            </div>
        </div>

        {{--    AF AND PS   --}}
        @if(in_array($ct, ['J', 'S']) )
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header header-elements-inline bg-danger">
                            <h6 class="card-title font-weight-bold">AFFECTIVE TRAITS</h6>
                            {!! Qs::getPanelOptions() !!}
                        </div>

                        <div class="card-body collapse">
                            <form class="ajax-update" method="post" action="{{ route('marks.skills_update', ['AF', $exr->id]) }}">
                                @csrf @method('PUT')
                                @foreach($skills->where('skill_type', 'AF') as $af)
                                    <div class="form-group row">
                                        <label for="af" class="col-lg-6 col-form-label font-weight-semibold">{{ $af->name }}</label>
                                        <div class="col-lg-6">
                                            <select data-placeholder="Select" name="af[]" id="af" class="form-control select">
                                                <option value=""></option>
                                                @for($i=1; $i<=5; $i++)
                                                    <option {{ $exr->af && explode(',', $exr->af)[$loop->index] == $i ? 'selected' : '' }} value="{{ $i }}">{{ $i }}</option>
                                                @endfor
                                            </select>
                                        </div>
                                    </div>
                                @endforeach



                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary">Submit form <i class="icon-paperplane ml-2"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header header-elements-inline bg-success">
                            <h6 class="card-title font-weight-bold">PSYCHOMOTOR SKILLS</h6>
                            {!! Qs::getPanelOptions() !!}
                        </div>

                        <div class="card-body collapse">
                            <form class="ajax-update" method="post" action="{{ route('marks.skills_update', ['PS', $exr->id]) }}">
                                @csrf @method('PUT')
                                @foreach($skills->where('skill_type', 'PS') as $ps)
                                    <div class="form-group row">
                                        <label for="ps" class="col-lg-6 col-form-label font-weight-semibold">{{ $ps->name }}</label>
                                        <div class="col-lg-6">
                                            <select data-placeholder="Select" name="ps[]" id="ps" class="form-control select">
                                                <option value=""></option>
                                                @for($i=1; $i<=5; $i++)
                                                    <option {{ $exr->ps && explode(',', $exr->ps)[$loop->index] == $i ? 'selected' : '' }} value="{{ $i }}">{{ $i }}</option>
                                                @endfor
                                            </select>
                                        </div>
                                    </div>
                                @endforeach



                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary">Submit form <i class="icon-paperplane ml-2"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        @endif
        @endif

    @endforeach
@endforeach
