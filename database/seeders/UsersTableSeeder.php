<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Helpers\Qs;
use App\User;

class UsersTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        $this->createNewUsers();
        $this->createManyUsers( 3);
    }

    protected function createNewUsers()
    {
        $password = Hash::make('cj');

        $users = [
            [
                'name' => 'CJ Inspired',
                'email' => 'cj@cj.com',
                'username' => 'cj',
                'password' => $password,
                'user_type' => 'super_admin',
            ],
            [
                'name' => 'Admin KORA',
                'email' => 'admin@admin.com',
                'username' => 'admin',
                'password' => $password,
                'user_type' => 'admin',
            ],
            [
                'name' => 'Teacher Chike',
                'email' => 'teacher@teacher.com',
                'username' => 'teacher',
                'password' => $password,
                'user_type' => 'teacher',
            ],
            [
                'name' => 'Parent Kaba',
                'email' => 'parent@parent.com',
                'username' => 'parent',
                'password' => $password,
                'user_type' => 'parent',
            ],
            [
                'name' => 'Accountant Jeff',
                'email' => 'accountant@accountant.com',
                'username' => 'accountant',
                'password' => $password,
                'user_type' => 'accountant',
            ],
        ];

        foreach ($users as $user) {
            User::create($user); 
        }
    }

    protected function createManyUsers(int $count)
    {
        $userTypes = Qs::getAllUserTypes(['super_admin', 'librarian', 'student']);

        for ($i = 1; $i <= $count; $i++) {
            foreach ($userTypes as $type) {
                User::create([
                    'name' => ucfirst($type) . ' ' . $i,
                    'email' => $type . $i . '@' . $type . '.com',
                    'user_type' => $type,
                    'username' => $type . $i,
                    'password' => Hash::make($type),
                ]);
            }
        }
    }
}
