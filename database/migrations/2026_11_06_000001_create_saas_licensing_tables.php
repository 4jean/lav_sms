<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaasLicensingTables extends Migration
{
    public function up()
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code', 50)->unique();
            $table->string('status', 20)->default('active');
            $table->string('timezone')->default('Asia/Kolkata');
            $table->json('settings')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('code', 30)->unique();
            $table->decimal('default_price', 12, 2)->nullable();
            $table->string('currency', 3)->default('INR');
            $table->boolean('active')->default(true);
            $table->timestamps();
        });

        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code', 60)->unique();
            $table->boolean('active')->default(true);
            $table->timestamps();
        });

        Schema::create('school_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('school_id')->constrained()->cascadeOnDelete();
            $table->foreignId('plan_id')->nullable()->constrained()->nullOnDelete();
            $table->decimal('manual_price', 12, 2);
            $table->string('currency', 3)->default('INR');
            $table->dateTime('starts_at');
            $table->dateTime('ends_at');
            $table->unsignedInteger('grace_days')->default(0);
            $table->string('status', 20)->default('active');
            $table->text('pricing_note')->nullable();
            $table->foreignId('decided_by')->constrained('users');
            $table->timestamps();
            $table->index(['school_id', 'status', 'starts_at', 'ends_at'], 'school_subscription_access_idx');
        });

        Schema::create('school_module_licenses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('school_id')->constrained()->cascadeOnDelete();
            $table->foreignId('module_id')->constrained()->cascadeOnDelete();
            $table->foreignId('subscription_id')->nullable()->constrained('school_subscriptions')->cascadeOnDelete();
            $table->dateTime('starts_at');
            $table->dateTime('ends_at');
            $table->boolean('enabled')->default(true);
            $table->foreignId('granted_by')->constrained('users');
            $table->timestamps();
            $table->unique(['school_id', 'module_id', 'subscription_id'], 'school_module_subscription_unique');
        });

        Schema::create('subscription_audit_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('school_id')->constrained()->cascadeOnDelete();
            $table->foreignId('subscription_id')->nullable()->constrained('school_subscriptions')->nullOnDelete();
            $table->foreignId('actor_id')->constrained('users');
            $table->string('action', 50);
            $table->json('before')->nullable();
            $table->json('after')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->timestamps();
        });

        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('school_id')->nullable()->after('id')->constrained()->nullOnDelete();
            $table->index(['school_id', 'user_type']);
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['school_id']);
            $table->dropIndex(['school_id', 'user_type']);
            $table->dropColumn('school_id');
        });
        Schema::dropIfExists('subscription_audit_logs');
        Schema::dropIfExists('school_module_licenses');
        Schema::dropIfExists('school_subscriptions');
        Schema::dropIfExists('modules');
        Schema::dropIfExists('plans');
        Schema::dropIfExists('schools');
    }
}
