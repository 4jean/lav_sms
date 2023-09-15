<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('class_types')->delete();

        $data = [
            ['name' => 'Day Care', 'code' => 'DC'],
            ['name' => 'Nursery', 'code' => 'N'],
            ['name' => 'Kinder Garten', 'code' => 'KG'],
            ['name' => 'Junior Secondary', 'code' => 'J'],
            ['name' => 'Senior Secondary', 'code' => 'S'],
            ['name' => 'Higher Secondary', 'code' => 'HS'],
        ];

        DB::table('class_types')->insert($data);

    }
}
