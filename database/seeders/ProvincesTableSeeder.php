<?php
namespace Database\Seeders;

use App\Models\Province;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvincesTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('provinces')->delete();

        $provinces = [
            'Koshi Province', 'Madhesh Province', 'Bagmati Province', 'Gandaki Province', 'Lumbini Province', 'Karnali Province', 'Sudur Paschim Province',
        ];

        foreach ($provinces as $province) {
            Province::create(['name' => $province]);
        }
    }

}
