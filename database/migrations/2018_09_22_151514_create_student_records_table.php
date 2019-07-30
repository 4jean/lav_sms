<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_records', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('my_class_id');
            $table->unsignedInteger('section_id');
            $table->string('adm_no', 30)->unique()->nullable();
            $table->unsignedInteger('my_parent_id')->nullable();
            $table->unsignedInteger('dorm_id')->nullable();
            $table->string('dorm_room_no')->nullable();
            $table->string('session');
            $table->string('house')->nullable();
            $table->tinyInteger('age')->nullable();
            $table->string('year_admitted')->nullable();
            $table->tinyInteger('grad')->default(0);
            $table->string('grad_date')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_records');
    }
}
