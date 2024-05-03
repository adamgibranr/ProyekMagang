<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('resources', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('cpu_cores');
            $table->integer('cpu_thread');
            $table->float('cpu_basefreq');
            $table->float('cpu_runfreq');
            $table->float('cpu_runtime');
            $table->float('mem_total');
            $table->float('mem_available');
            $table->float('mem_used');
            $table->float('mem_percentage');
            $table->float('storage_total');
            $table->float('storage_available');
            $table->float('storage_used');
            $table->float('storage_percentage');
            $table->integer('pkt_sent');
            $table->integer('pkt_rec');
            $table->integer('byte_sent');
            $table->integer('byte_rec');
            $table->string('ip_private');
            $table->string('ip_public');
            $table->string('mac_address');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};
