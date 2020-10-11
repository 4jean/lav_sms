<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'Api\UserController@login');

    /*************** Students *****************/
Route::group(['prefix' => 'students', 'middleware:sanctum'], function(){
    Route::get('reset_pass/{st_id}', 'StudentRecordController@reset_pass')->name('st.reset_pass');
    Route::get('graduated', 'StudentRecordController@graduated')->name('students.graduated');
    Route::put('not_graduated/{id}', 'StudentRecordController@not_graduated')->name('st.not_graduated');
    Route::get('list/{class_id}', 'StudentRecordController@listByClass')->name('students.list');
});
