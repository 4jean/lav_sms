<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Helpers\Fn;

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
        $d = [

            ['name' => 'CJ Inspired',
                'email' => 'cj@cj.com',
                'password' => Hash::make('cj'),
                'user_type' => $ut[4],
                'code' => strtoupper(str_random(10)),
                'remember_token' => str_random(10),
                'photo' => Fn::getDefaultUserImage(),
            ],

            ['name' => 'Admin KORA',
            'email' => $ut[0].'@'.$ut[0].'.com',
            'password' => Hash::make('cj'),
            'user_type' => $ut[0],
            'code' => strtoupper(str_random(10)),
            'remember_token' => str_random(10),
            'photo' => Fn::getDefaultUserImage(),
            ],

            ['name' => 'Teacher Chike',
                'email' => $ut[2].'@'.$ut[2].'.com',
                'user_type' => $ut[2],
                'password' => Hash::make('cj'),
                'code' => strtoupper(str_random(10)),
                'remember_token' => str_random(10),
                'photo' => Fn::getDefaultUserImage(),
            ],

            ['name' => 'Parent Kaba',
                'email' => $ut[3].'@'.$ut[3].'.com',
                'user_type' => $ut[3],
                'password' => Hash::make('cj'),
                'code' => strtoupper(str_random(10)),
                'remember_token' => str_random(10),
                'photo' => Fn::getDefaultUserImage(),
            ],
        ];
        DB::table('users')->insert($d);
    }

    protected function multiUsers($ut)
    {
        $data = [];

        for($i=1; $i<2; $i++){

            /*Create Students Users*/
         /*   $data[] = ['name' => $ut[1].' '.$i,
                'email' => $ut[1].$i.'@'.$ut[1].'.com',
                'user_type' => $ut[1],
                'password' => Hash::make($ut[1]),
                'code' => str_random(10),
                'remember_token' => str_random(10),
                'photo' => Fn::getDefaultUserImage(),
            ];*/

            /*Create Teachers Users*/
            $data[] = ['name' => $ut[2].' '.$i,
                'email' => $ut[2].$i.'@'.$ut[2].'.com',
                'user_type' => $ut[2],
                'password' => Hash::make($ut[2]),
                'code' => strtoupper(str_random(10)),
                'remember_token' => str_random(10),
                'photo' => Fn::getDefaultUserImage(),
            ];

            /*Create Parents Users*/

            $data[] = ['name' => $ut[3].' '.$i,
                'email' => $ut[3].$i.'@'.$ut[3].'.com',
                'user_type' => $ut[3],
                'password' => Hash::make($ut[3]),
                'code' => strtoupper(str_random(10)),
                'remember_token' => str_random(10),
                'photo' => Fn::getDefaultUserImage(),
            ];
        }

        DB::table('users')->insert($data);
    }
}
