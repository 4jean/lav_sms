<?php

namespace Database\Factories;


use App\Helpers\Qs;
use App\Models\StudentRecord;
use Illuminate\Database\Eloquent\Factories\Factory;

class StudentRecordFactory extends Factory
{
    protected $model = StudentRecord::class;

    public function definition(): array
    {
        return [
            // These will usually be overridden by the seeder
            'session' => Qs::getCurrentSession(),
            'my_class_id' => null,
            'section_id'  => null,
            'user_id'     => null,
        ];
    }
}
