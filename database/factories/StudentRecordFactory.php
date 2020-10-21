<?php

namespace Database\Factories;

use App\Helpers\Qs;
use App\Models\MyClass;
use App\Models\Section;
use App\Models\StudentRecord;
use Illuminate\Database\Eloquent\Factories\Factory;

class StudentRecordFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = StudentRecord::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'session' => Qs::getCurrentSession(),
            'my_class_id' => MyClass::first()->id,
            'section_id' => Section::first()->id,
            'user_id' => null
        ];
    }
}
