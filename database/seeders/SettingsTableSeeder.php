<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->delete();

        $data = [
            ['type' => 'current_session', 'description' => '2023-2024'],
            ['type' => 'system_title', 'description' => '977'],
            ['type' => 'system_name', 'description' => 'Kalika Bidhyalaya'],
            ['type' => 'term_ends', 'description' => '7/10/2023'],
            ['type' => 'term_begins', 'description' => '7/10/2023'],
            ['type' => 'phone', 'description' => '0123456789'],
            ['type' => 'address', 'description' => 'Solukhumbu, Koshi Province,Nepal'],
            ['type' => 'system_email', 'description' => 'info@977ventures.com.np'],
            ['type' => 'alt_email', 'description' => ''],
            ['type' => 'email_host', 'description' => ''],
            ['type' => 'email_pass', 'description' => ''],
            ['type' => 'lock_exam', 'description' => 0],
            ['type' => 'logo', 'description' => ''],
            ['type' => 'next_term_fees_j', 'description' => '5000'],
            ['type' => 'next_term_fees_pn', 'description' => '8000'],
            ['type' => 'next_term_fees_p', 'description' => '8000'],
            ['type' => 'next_term_fees_n', 'description' => '8000'],
            ['type' => 'next_term_fees_s', 'description' => '6500'],
            ['type' => 'next_term_fees_c', 'description' => '1600'],
        ];

        DB::table('settings')->insert($data);

    }
}
