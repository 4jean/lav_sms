@extends('layouts.master')
@section('page_title', 'Graduated Students')
@section('content')

<div class="card">
    <div class="card-header header-elements-inline">
        <h6 class="card-title">Students Graduated</h6>
        {!! Fn::getPanelOptions() !!}
    </div>

    <div class="card-body">
        <ul class="nav nav-tabs nav-tabs-highlight">
            <li class="nav-item"><a href="#all-students" class="nav-link active" data-toggle="tab">All Graduated Students</a></li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Select Class</a>
                <div class="dropdown-menu dropdown-menu-right">
                    @foreach($my_classes as $c)
                    <a href="#c{{ $c->id }}" class="dropdown-item" data-toggle="tab">{{ $c->name }}</a>
                    @endforeach
                </div>
            </li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane fade show active" id="all-students">
                <table class="table datatable-button-html5-columns">
                    <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>ADM_No</th>
                        <th>Section</th>
                        <th>Grad Year</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($students as $s)
                    <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td><img class="rounded-circle" style="height: 40px; width: 40px;" src="{{ $s->user->photo }}" alt="photo"></td>
                        <td>{{ $s->user->name }}</td>
                        <td>{{ $s->adm_no }}</td>
                        <td>{{ $s->my_class->name.' '.$s->section->name }}</td>
                        <td>{{ $s->grad_date }}</td>
                        <td class="text-center">
                            <div class="list-icons">
                                <div class="dropdown">
                                    <a href="#" class="list-icons-item" data-toggle="dropdown">
                                        <i class="icon-menu9"></i>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-left">
                                        <a href="{{ route('students.show', Fn::hash($s->id)) }}" class="dropdown-item"><i class="icon-eye"></i> View Profile</a>
                                        @if(Fn::userIsTeamSA())
                                        <a href="{{ route('students.edit', Fn::hash($s->id)) }}" class="dropdown-item"><i class="icon-pencil"></i> Edit</a>
                                        <a href="{{ route('st.reset_pass', Fn::hash($s->user->id)) }}" class="dropdown-item"><i class="icon-lock"></i> Reset password</a>

                                        {{--Not Graduated--}}
                                        <a id="{{ Fn::hash($s->id) }}" href="#" onclick="$('form#ng-'+this.id).submit();" class="dropdown-item"><i class="icon-stairs-down"></i> Not Graduated</a>
                                            <form method="post" id="ng-{{ Fn::hash($s->id) }}" action="{{ route('st.not_graduated', Fn::hash($s->id)) }}" class="hidden">@csrf @method('put')</form>
                                        @endif

                                        <a target="_blank" href="{{ route('marks.year_selector', Fn::hash($s->user->id)) }}" class="dropdown-item"><i class="icon-check"></i> Marksheet</a>

                                        {{--Delete--}}
                                        @if(Fn::userIsSuperAdmin())
                                        <a id="{{ Fn::hash($s->user->id) }}" onclick="confirmDelete(this.id)" href="#" class="dropdown-item"><i class="icon-trash"></i> Delete</a>
                                        <form method="post" id="item-delete-{{ Fn::hash($s->user->id) }}" action="{{ route('students.destroy', Fn::hash($s->user->id)) }}" class="hidden">@csrf @method('delete')</form>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>

            @foreach($my_classes as $mc)
            <div class="tab-pane fade" id="c{{$mc->id}}">                                      <table class="table datatable-button-html5-columns">
                    <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>ADM_No</th>
                        <th>Section</th>
                        <th>Grad Year</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($students->where('my_class_id', $mc->id) as $s)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td><img class="rounded-circle" style="height: 40px; width: 40px;" src="{{ $s->user->photo }}" alt="photo"></td>
                            <td>{{ $s->user->name }}</td>
                            <td>{{ $s->adm_no }}</td>
                            <td>{{ $s->my_class->name.' '.$s->section->name }}</td>
                            <td>{{ $s->grad_date }}</td>
                            <td class="text-center">
                                <div class="list-icons">
                                    <div class="dropdown">
                                        <a href="#" class="list-icons-item" data-toggle="dropdown">
                                            <i class="icon-menu9"></i>
                                        </a>

                                        <div class="dropdown-menu dropdown-menu-left">
                                            <a href="{{ route('students.show', Fn::hash($s->id)) }}" class="dropdown-item"><i class="icon-eye"></i> View Profile</a>
                                            @if(Fn::userIsTeamSA())
                                                <a href="{{ route('students.edit', Fn::hash($s->id)) }}" class="dropdown-item"><i class="icon-pencil"></i> Edit</a>
                                                <a href="{{ route('st.reset_pass', Fn::hash($s->user->id)) }}" class="dropdown-item"><i class="icon-lock"></i> Reset password</a>

                                                {{--Not Graduated--}}
                                                <a id="{{ Fn::hash($s->id) }}" href="#" onclick="$('form#ng-'+this.id).submit();" class="dropdown-item"><i class="icon-stairs-down"></i> Not Graduated</a>
                                                <form method="post" id="ng-{{ Fn::hash($s->id) }}" action="{{ route('st.not_graduated', Fn::hash($s->id)) }}" class="hidden">@csrf @method('put')</form>
                                            @endif

                                            <a target="_blank" href="{{ route('marks.year_selector', Fn::hash($s->user->id)) }}" class="dropdown-item"><i class="icon-check"></i> Marksheet</a>

                                            {{--Delete--}}
                                            @if(Fn::userIsSuperAdmin())
                                                <a id="{{ Fn::hash($s->user->id) }}" onclick="confirmDelete(this.id)" href="#" class="dropdown-item"><i class="icon-trash"></i> Delete</a>
                                                <form method="post" id="item-delete-{{ Fn::hash($s->user->id) }}" action="{{ route('students.destroy', Fn::hash($s->user->id)) }}" class="hidden">@csrf @method('delete')</form>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
            @endforeach

        </div>
    </div>
</div>

{{--Student List Ends--}}

@endsection