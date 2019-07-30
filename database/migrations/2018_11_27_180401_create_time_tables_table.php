<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTimeTablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time_table_records', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100)->unique();
            $table->unsignedInteger('my_class_id');
            $table->unsignedInteger('exam_id')->nullable();
            $table->string('year', 100);
            $table->timestamps();

            $table->unique(['my_class_id', 'exam_id', 'year']);
        });

        Schema::create('time_slots', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('ttr_id');
            $table->tinyInteger('hour_from');
            $table->string('min_from', 2);
            $table->string('meridian_from', 2);
            $table->tinyInteger('hour_to');
            $table->string('min_to', 2);
            $table->string('meridian_to', 2);
            $table->string('time_from', 100);
            $table->string('time_to', 100);
            $table->string('timestamp_from', 50);
            $table->string('timestamp_to', 50);
            $table->string('full', 100);
            $table->timestamps();

            $table->unique(['timestamp_from', 'timestamp_to', 'ttr_id']);

        });

        Schema::create('time_tables', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('ttr_id');
            $table->unsignedInteger('ts_id');
            $table->unsignedInteger('subject_id')->nullable();
            $table->string('exam_date', 50)->nullable();
            $table->string('timestamp_from', 100);
            $table->string('timestamp_to', 100);
            $table->string('day', 50)->nullable();
            $table->tinyInteger('day_num')->nullable();
            $table->timestamps();

            $table->unique(['ttr_id', 'ts_id', 'day']);
            $table->unique(['ttr_id', 'ts_id', 'exam_date']);
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('time_tables');
        Schema::dropIfExists('time_slots');
        Schema::dropIfExists('time_table_records');
    }
}
