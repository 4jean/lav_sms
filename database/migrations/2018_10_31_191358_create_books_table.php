<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100);
            $table->unsignedInteger('my_class_id')->nullable();
            $table->string('description')->nullable();
            $table->string('author')->nullable();
            $table->string('book_type')->nullable();
            $table->string('url')->nullable();
            $table->string('location')->nullable();
            $table->integer('total_copies')->nullable();
            $table->integer('issued_copies')->nullable();
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
        Schema::dropIfExists('books');
    }
}
