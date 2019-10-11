@extends('layouts.master')
@section('page_title', 'Generate Pins')
@section('content')
    <div class="card">
        <div class="card-header header-elements-inline">
            <h5 class="card-title"><i class="icon-alarm mr-2"></i> Generate Pins</h5>
            {!! Qs::getPanelOptions() !!}
        </div>

        <div class="card-body">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <form method="post" action="{{ route('pins.store') }}">
                        @csrf
                        <div class="form-group">
                            <label for="pin_count" class="font-weight-bold col-form-label">Generate Pins (Enter Amount of Pins you Need) </label>
                            <input class="form-control form-control-lg" placeholder="Enter Number Between 10 and 500" required name="pin_count" type="text">
                        </div>

                        <div class="text-center mt-2">
                            <button type="submit" class="btn btn-primary btn-lg">Submit <i class="icon-paperplane ml-2"></i></button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
