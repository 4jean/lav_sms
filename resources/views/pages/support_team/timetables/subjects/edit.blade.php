<div class="tab-pane fade" id="edit-subs">
    {{--If TimeTables Exist--}}
    @if($tts->count())
        @foreach($tts->chunk(2) as $chunk)
            <div class="row">
                @foreach($chunk as $tt)
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header header-elements-inline">
                                <h6 class="card-title font-weight-bold">{{ ($tt->exam_date ? 'Exam ('.date('D\, d/m/Y', strtotime($tt->exam_date)).')' : $tt->day) }} {{ '('.$tt->time_slot->full.')' .' - '.$tt->subject->name }}</h6>
                                <div class="header-elements">
                                    <div class="list-icons">
                                        <a onclick="confirmDelete(this.id)" href="#" id="{{ $tt->id }}" title="DELETE"
                                           class="list-icons-item text-danger"><i class="icon-trash"></i></a>
                                        <form method="post" id="item-delete-{{ $tt->id }}"
                                              action="{{ route('tt.delete', $tt->id) }}"
                                              class="hidden">@csrf @method('delete')
                                        </form>
                                        <a class="list-icons-item" data-action="collapse"></a>
                                        <a class="list-icons-item" data-action="remove"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body collapse">
                                <div class="col-md-12">
                                    <form  method="post" action="{{ route('tt.update', $tt->id) }}">
                                        @csrf @method('PUT')

                                        <input name="ttr_id" value="{{ $ttr->id }}" type="hidden">

                                        @if($ttr->exam_id)
                                            {{--EXAM DATE--}}
                                            <div class="form-group row">
                                                <label class="col-lg-3 col-form-label font-weight-semibold">Exam
                                                    Date <span class="text-danger">*</span></label>
                                                <div class="col-lg-9">
                                                    <input autocomplete="off" name="exam_date"
                                                           value="{{ $tt->exam_date }}" required
                                                           type="text" class="form-control date-pick"
                                                           placeholder="Select Date...">
                                                </div>
                                            </div>

                                        @else
                                            {{--DAY--}}
                                            <div class="form-group row">
                                                <label for="day"
                                                       class="col-lg-3 col-form-label font-weight-semibold">Day
                                                    <span class="text-danger">*</span></label>
                                                <div class="col-lg-9">
                                                    <select id="day" name="day" required type="text"
                                                            class="form-control select"
                                                            data-placeholder="Select Day...">
                                                        @foreach(Qs::getDaysOfTheWeek() as $dw)
                                                            <option {{ $tt->day == $dw ? 'selected' : '' }} value="{{ $dw }}">{{ $dw }}</option>
                                                        @endforeach

                                                    </select>
                                                </div>
                                            </div>

                                        @endif
                                        {{--SUBJECT--}}
                                        <div class="form-group row">
                                            <label for="subject_id"
                                                   class="col-lg-3 col-form-label font-weight-semibold">Subject
                                                <span class="text-danger">*</span></label>
                                            <div class="col-lg-9">
                                                <select required data-placeholder="Select Subject"
                                                        class="form-control select-search"
                                                        name="subject_id" id="subject_id">
                                                    @foreach($subjects as $sub)
                                                        <option {{ $tt->subject_id == $sub->id ? 'selected' : '' }} value="{{ $sub->id }}">{{ $sub->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>

                                        {{--TIME SLOT--}}
        <div class="form-group row">

                <label for="ts_id" class="col-lg-3 col-form-label font-weight-semibold">Time Slot <span
                            class="text-danger">*</span></label>

                <div class="col-lg-9">
                    <select data-placeholder="Select Time..." required class="select form-control" name="ts_id" id="ts_id">

                        <option value=""></option>
                        @foreach($time_slots as $tms)
                            <option {{ $tt->ts_id == $tms->id ? 'selected' : '' }} value="{{ $tms->id }}">{{ $tms->full }}</option>
                        @endforeach
                    </select>
                </div>
            </div>

                                        {{--SUBMIT--}}
                                        <div class="text-right">
                                            <button type="submit" class="btn btn-primary">Submit Form <i class="icon-paperplane ml-2"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    @else
        <div class="alert alert-info text-center">There are NO Records to Display. Add Subjects To The TimeTable Record
            & Refresh the page
        </div>
    @endif
</div>
