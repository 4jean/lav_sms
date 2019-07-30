<?php

use App\Models\ClassType;
use Illuminate\Database\Seeder;

class MyClassesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('my_classes')->delete();
        $ct = ClassType::pluck('id')->all();

        $data = [
            ['name' => 'JSS 1', 'class_type_id' => $ct[4]],
            ['name' => 'JSS 2', 'class_type_id' => $ct[4]],
            ['name' => 'JSS 3', 'class_type_id' => $ct[4]],
            ['name' => 'SSS 1', 'class_type_id' => $ct[5]],
            ['name' => 'SSS 2', 'class_type_id' => $ct[5]],
            ['name' => 'SSS 3', 'class_type_id' => $ct[5]],
            ];

        DB::table('my_classes')->insert($data);

    }
}
