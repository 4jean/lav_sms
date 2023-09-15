<?php
namespace Database\Seeders;

use App\Models\ClassType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


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
            ['name' => 'Day Care', 'class_type_id' => $ct[0]],
            ['name' => 'Nursery', 'class_type_id' => $ct[1]],
            ['name' => 'LKG', 'class_type_id' => $ct[2]],
            ['name' => 'UKG', 'class_type_id' => $ct[2]],
            ['name' => 'Grade 1', 'class_type_id' => $ct[3]],
            ['name' => 'Grade 2', 'class_type_id' => $ct[3]],
            ['name' => 'Grade 3', 'class_type_id' => $ct[3]],
            ['name' => 'Grade 4', 'class_type_id' => $ct[3]],
            ['name' => 'Grade 5', 'class_type_id' => $ct[3]],
            ['name' => 'Grade 6', 'class_type_id' => $ct[4]],
            ['name' => 'Grade 7', 'class_type_id' => $ct[4]],
            ['name' => 'Grade 8', 'class_type_id' => $ct[4]],
            ['name' => 'Grade 9', 'class_type_id' => $ct[4]],
            ['name' => 'Grade 10', 'class_type_id' => $ct[4]],
            ['name' => 'Grade 11', 'class_type_id' => $ct[5]],
            ['name' => 'Grade 12', 'class_type_id' => $ct[5]],
            ];

        DB::table('my_classes')->insert($data);

    }
}
