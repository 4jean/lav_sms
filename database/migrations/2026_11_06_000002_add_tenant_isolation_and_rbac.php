<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTenantIsolationAndRbac extends Migration
{
    private $tenantTables = [
        'my_classes', 'sections', 'subjects', 'student_records', 'dorms',
        'exams', 'marks', 'grades', 'pins', 'skills', 'exam_records',
        'books', 'book_requests', 'staff_records', 'payments',
        'payment_records', 'receipts', 'time_table_records', 'time_slots', 'time_tables', 'promotions', 'settings'
    ];

    public function up()
    {
        foreach ($this->tenantTables as $tableName) {
            Schema::table($tableName, function (Blueprint $table) {
                $table->foreignId('school_id')->nullable()->constrained()->cascadeOnDelete();
                $table->index('school_id');
            });
        }

        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->string('code', 100)->unique();
            $table->string('name');
            $table->string('module_code', 60)->nullable();
            $table->timestamps();
        });

        Schema::create('school_roles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('school_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->boolean('is_system')->default(false);
            $table->timestamps();
            $table->unique(['school_id', 'name']);
        });

        Schema::create('role_permissions', function (Blueprint $table) {
            $table->foreignId('school_role_id')->constrained()->cascadeOnDelete();
            $table->foreignId('permission_id')->constrained()->cascadeOnDelete();
            $table->primary(['school_role_id', 'permission_id']);
        });

        Schema::create('user_school_roles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('school_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('school_role_id')->constrained()->cascadeOnDelete();
            $table->dateTime('starts_at')->nullable();
            $table->dateTime('ends_at')->nullable();
            $table->boolean('active')->default(true);
            $table->foreignId('assigned_by')->constrained('users');
            $table->timestamps();
            $table->unique(['school_id', 'user_id', 'school_role_id'], 'school_user_role_unique');
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_school_roles');
        Schema::dropIfExists('role_permissions');
        Schema::dropIfExists('school_roles');
        Schema::dropIfExists('permissions');

        foreach (array_reverse($this->tenantTables) as $tableName) {
            Schema::table($tableName, function (Blueprint $table) {
                $table->dropForeign(['school_id']);
                $table->dropIndex(['school_id']);
                $table->dropColumn('school_id');
            });
        }
    }
}
