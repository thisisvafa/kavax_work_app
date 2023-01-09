<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTSTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('t__s__tickets', function (Blueprint $table) {
            $table->id('tstID');
            $table->string('ticket_title')->nullable();
            $table->string('status')->default('waiting');
            $table->string('answered_by')->nullable();
            $table->date('opened_on')->nullable();
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
        Schema::dropIfExists('t__s__tickets');
    }
}
