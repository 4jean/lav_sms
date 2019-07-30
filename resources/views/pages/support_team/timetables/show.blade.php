@extends('layouts.master')
@section('page_title', 'View TimeTable')
@section('content')

    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-4"><h6 class="card-title"><strong>Name: </strong> {{ $ttr->name }}</h6></div>
                <div class="col-md-4"><h6 class="card-title"><strong>Class: </strong> {{ $my_class->name }}</h6></div>
                <div class="col-md-4"><h6 class="card-title"><strong>Year: </strong> {{ ($ttr->exam_id) ? 'Exam TimeTable' : 'Class TimeTable' }} {{ '('.$ttr->year.')' }}</h6></div>
            </div>
        </div>
            <div class="card-body">
                <table class="table table-responsive table-striped">
                    <thead>
                    <tr>
                        <th rowspan="2">Time <i class="icon-arrow-right7 ml-2"></i> <br> Date<i class="icon-arrow-down7 ml-2"></i>
                        </th>
                        @foreach($time_slots as $tms)
                            <th rowspan="2">{{ $tms->time_from }} <br>
                            {{ $tms->time_to }}
                            </th>
                        @endforeach
                    </tr>
                    </thead>
                    <tbody>
                        @foreach($days as $day)
                            <tr>
                                @if($ttr->exam_id)
                                <td><strong>{{ date('l', strtotime($day)) }} <br> {{ date('d/m/Y', strtotime($day)) }} </strong></td>
                                @else
                                <td><strong>{{ $day }}</strong></td>
                                @endif
                                @foreach($d_time->where('day', $day) as $dt)
                                <td>{{ $dt['subject'] }}</td>
                                @endforeach
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                {{--Print Button--}}
                <div class="text-center mt-4">
                    <a target="_blank" href="{{ route('ttr.print', $ttr->id) }}" class="btn btn-danger btn-lg"><i class="icon-printer mr-2"></i> Print Timetable</a>
                </div>
            </div>
        </div>

@endsection