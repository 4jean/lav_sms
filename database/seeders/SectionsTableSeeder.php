<?php
namespace Database\Seeders;

use App\Models\MyClass;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class SectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sections')->delete();
        $c = MyClass::pluck('id')->all();

        $data = [
            ['name' => 'Gold', 'my_class_id' => $c[0], 'active' => 1],
            ['name' => 'Diamond', 'my_class_id' => $c[0], 'active' => 0],
            ['name' => 'Silver', 'my_class_id' => $c[1], 'active' => 1],
            ['name' => 'Lemon', 'my_class_id' => $c[1], 'active' => 0],
            ['name' => 'Bronze', 'my_class_id' => $c[2], 'active' => 1],
            ['name' => 'Silver', 'my_class_id' => $c[3], 'active' => 1],
            ['name' => 'Diamond', 'my_class_id' => $c[4], 'active' => 1],
            ['name' => 'Blue', 'my_class_id' => $c[5], 'active' => 1],
        ];

        DB::table('sections')->insert($data);
    }
}
