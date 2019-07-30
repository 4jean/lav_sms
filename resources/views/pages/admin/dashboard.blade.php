@extends('layouts.master')
@section('page_title', 'My Dashboard')

@section('content')
    <h2>WELCOME {{ Auth::user()->name }}. This is your DASHBOARD</h2>
    @endsection