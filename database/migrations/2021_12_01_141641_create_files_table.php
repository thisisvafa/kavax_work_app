<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id('file_id');
            $table->string('file_name')->nullable();
            $table->string('file_type')->nullable();
            $table->unsignedBigInteger('msg_id')->nullable();
            $table->foreign('msg_id')->references('msgID')->on('messages')->onDelete('cascade');
            $table->unsignedBigInteger('project_id')->nullable();;
            $table->foreign('project_id')->references('pID')->on('projects')->onDelete('cascade');
            $table->unsignedBigInteger('tst_msg_id')->nullable();;
            $table->foreign('tst_msg_id')->references('msg_id')->on('support_messages')->onDelete('cascade');
            $table->unsignedBigInteger('tst_id')->nullable();;
            $table->foreign('tst_id')->references('tstID')->on('t__s__tickets')->onDelete('cascade');
            $table->unsignedBigInteger('payment_id')->nullable();;
            $table->foreign('payment_id')->references('code')->on('payment_lists')->onDelete('cascade');
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
        Schema::dropIfExists('files');
    }
}
