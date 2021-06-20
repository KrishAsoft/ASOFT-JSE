<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocalBrokerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('local_brokers', function (Blueprint $table) {
            $table->bigIncrements('id');
            // $table->unsignedBigInteger('local_broker_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            // $table->string('name');
            // $table->string('email');
            // $table->string('status');
            $table->string('dma_client_id')->nullable();
            // $table->string('password');
            // $table->foreign('local_broker_id')->references('id')->on('local_brokers')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('local_brokers');
    }
}
