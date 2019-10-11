@extends('layouts.master')
@section('page_title', 'My Account')
@section('content')

    <div class="card">
        <div class="card-header header-elements-inline">
            <h6 class="card-title">My Account</h6>
            {!! Qs::getPanelOptions() !!}
        </div>

        <div class="card-body">
            <ul class="nav nav-tabs nav-tabs-highlight">
                <li class="nav-item"><a href="#change-pass" class="nav-link active" data-toggle="tab">Change Password</a></li>
                @if(Qs::userIsPTA())
                    <li class="nav-item"><a href="#edit-profile" class="nav-link" data-toggle="tab"><i class="icon-plus2"></i> Manage Profile</a></li>
                @endif
            </ul>

            <div class="tab-content">
                <div class="tab-pane fade show active" id="change-pass">
                    <div class="row">
                        <div class="col-md-8">
                            <form method="post" action="{{ route('my_account.change_pass') }}">
                                @csrf @method('put')

                                <div class="form-group row">
                                    <label for="current_password" class="col-lg-3 col-form-label font-weight-semibold">Current Password <span class="text-danger">*</span></label>
                                    <div class="col-lg-9">
                                        <input id="current_password" name="current_password"  required type="password" class="form-control" >
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-lg-3 col-form-label font-weight-semibold">New Password <span class="text-danger">*</span></label>
                                    <div class="col-lg-9">
                                        <input id="password" name="password"  required type="password" class="form-control" >
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password_confirmation" class="col-lg-3 col-form-label font-weight-semibold">Confirm Password <span class="text-danger">*</span></label>
                                    <div class="col-lg-9">
                                        <input id="password_confirmation" name="password_confirmation"  required type="password" class="form-control" >
                                    </div>
                                </div>

                                <div class="text-right">
                                    <button type="submit" class="btn btn-danger">Submit form <i class="icon-paperplane ml-2"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                @if(Qs::userIsPTA())
                    <div class="tab-pane fade" id="edit-profile">
                        <div class="row">
                            <div class="col-md-6">
                                <form enctype="multipart/form-data" method="post" action="{{ route('my_account.update') }}">
                                    @csrf @method('put')

                                    <div class="form-group row">
                                        <label for="name" class="col-lg-3 col-form-label font-weight-semibold">Name</label>
                                        <div class="col-lg-9">
                                            <input disabled="disabled" id="name" class="form-control" type="text" value="{{ $my->name }}">
                                        </div>
                                    </div>

                                    @if($my->username)
                                        <div class="form-group row">
                                            <label for="username" class="col-lg-3 col-form-label font-weight-semibold">Username</label>
                                            <div class="col-lg-9">
                                                <input disabled="disabled" id="username" class="form-control" type="text" value="{{ $my->username }}">
                                            </div>
                                        </div>

                                    @else

                                        <div class="form-group row">
                                            <label for="username" class="col-lg-3 col-form-label font-weight-semibold">Username </label>
                                            <div class="col-lg-9">
                                                <input id="username" name="username"  type="text" class="form-control" >
                                            </div>
                                        </div>
                                    @endif

                                    <div class="form-group row">
                                        <label for="email" class="col-lg-3 col-form-label font-weight-semibold">Email </label>
                                        <div class="col-lg-9">
                                            <input id="email" value="{{ $my->email }}" name="email"  type="email" class="form-control" >
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="phone" class="col-lg-3 col-form-label font-weight-semibold">Phone </label>
                                        <div class="col-lg-9">
                                            <input id="phone" value="{{ $my->phone }}" name="phone"  type="text" class="form-control" >
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="phone2" class="col-lg-3 col-form-label font-weight-semibold">Telephone </label>
                                        <div class="col-lg-9">
                                            <input id="phone2" value="{{ $my->phone2 }}" name="phone2"  type="text" class="form-control" >
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="address" class="col-lg-3 col-form-label font-weight-semibold">Address </label>
                                        <div class="col-lg-9">
                                            <input id="address" value="{{ $my->address }}" name="address"  type="text"  class="form-control" >
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="address" class="col-lg-3 col-form-label font-weight-semibold">Change Photo </label>
                                        <div class="col-lg-9">
                                            <input  accept="image/*" type="file" name="photo" class="form-input-styled" data-fouc>
                                        </div>
                                    </div>

                                    <div class="text-right">
                                        <button type="submit" class="btn btn-danger">Submit form <i class="icon-paperplane ml-2"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>

    {{--My Profile Ends--}}

@endsection
