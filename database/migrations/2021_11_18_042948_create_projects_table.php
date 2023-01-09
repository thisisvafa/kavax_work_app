<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('projects', function (Blueprint $table) {
            $table->id('pID');
            $table->string('category')->nullable();
            $table->string('objective')->nullable();
            $table->string('budget')->nullable();
            $table->string('name')->nullable();
            $table->string('project_name')->nullable();
            $table->string('employee_size')->nullable();
            $table->string('status')->nullable()->default('Opened');
            $table->string('progress')->nullable();
            $table->date('dueDate')->nullable();
            $table->unsignedBigInteger('userID');
            $table->foreign('userID')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('projects');
    }
}
