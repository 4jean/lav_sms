<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGradesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grades', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 40);
            $table->unsignedInteger('class_type_id')->nullable();
            $table->tinyInteger('mark_from');
            $table->tinyInteger('mark_to');
            $table->string('remark', 40)->nullable();
            $table->timestamps();
        });

        Schema::table('grades', function (Blueprint $table) {
            $table->unique(['name', 'class_type_id', 'remark']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grades');
    }
}
