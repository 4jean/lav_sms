<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Helpers\Qs;
use Illuminate\Support\Str;

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

        $user_type = ['admin', 'student', 'teacher', 'parent', 'super_admin'];

        $this->newUsers($user_type);
        $this->multiUsers($user_type);
    }

    protected function newUsers($ut)
    {
        // Default user password
        $password = Hash::make('cj');

        $d = [

            ['name' => 'CJ Inspired',
                'email' => 'cj@cj.com',
                'username' => 'cj',
                'password' => $password,
                'user_type' => $ut[4],
                'code' => strtoupper(Str::random(10)),
                'remember_token' => Str::random(10),
                'photo' => Qs::getDefaultUserImage(),
            ],

            ['name' => 'Admin KORA',
            'email' => $ut[0].'@'.$ut[0].'.com',
            'password' => $password,
            'user_type' => $ut[0],
            'username' => $ut[0],
            'code' => strtoupper(Str::random(10)),
            'remember_token' => Str::random(10),
            'photo' => Qs::getDefaultUserImage(),
            ],

            ['name' => 'Teacher Chike',
                'email' => $ut[2].'@'.$ut[2].'.com',
                'user_type' => $ut[2],
                'username' => $ut[2],
                'password' => $password,
                'code' => strtoupper(Str::random(10)),
                'remember_token' => Str::random(10),
                'photo' => Qs::getDefaultUserImage(),
            ],

            ['name' => 'Parent Kaba',
                'email' => $ut[3].'@'.$ut[3].'.com',
                'user_type' => $ut[3],
                'username' => $ut[3],
                'password' => $password,
                'code' => strtoupper(Str::random(10)),
                'remember_token' => Str::random(10),
                'photo' => Qs::getDefaultUserImage(),
            ],
        ];
        DB::table('users')->insert($d);
    }

    protected function multiUsers($ut)
    {
        $data = [];

        for($i=1; $i<2; $i++){

            /*Create Student */
         /*   $data[] = ['name' => $ut[1].' '.$i,
                'email' => $ut[1].$i.'@'.$ut[1].'.com',
                'user_type' => $ut[1],
                'password' => Hash::make($ut[1]),
                'code' => Str::random(10),
                'remember_token' => Str::random(10),
                'photo' => Qs::getDefaultUserImage(),
            ];*/

            /*Create Teachers */
            $data[] = ['name' => $ut[2].' '.$i,
                'email' => $ut[2].$i.'@'.$ut[2].'.com',
                'user_type' => $ut[2],
                'password' => Hash::make($ut[2]),
                'code' => strtoupper(Str::random(10)),
                'remember_token' => Str::random(10),
                'photo' => Qs::getDefaultUserImage(),
            ];

            /*Create Parents Users*/

            $data[] = ['name' => $ut[3].' '.$i,
                'email' => $ut[3].$i.'@'.$ut[3].'.com',
                'user_type' => $ut[3],
                'password' => Hash::make($ut[3]),
                'code' => strtoupper(Str::random(10)),
                'remember_token' => Str::random(10),
                'photo' => Qs::getDefaultUserImage(),
            ];
        }

        DB::table('users')->insert($data);
    }
}
