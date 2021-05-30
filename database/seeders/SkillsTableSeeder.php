<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('skills')->delete();

        $this->createSkills();
    }

    protected function createSkills()
    {

        $types = ['AF', 'PS']; // Affective & Psychomotor Traits/Skills
        $d = [

            [ 'name' => 'PUNCTUALITY', 'skill_type' => $types[0] ],
            [ 'name' => 'NEATNESS', 'skill_type' => $types[0] ],
            [ 'name' => 'HONESTY', 'skill_type' => $types[0] ],
            [ 'name' => 'RELIABILITY', 'skill_type' => $types[0] ],
            [ 'name' => 'RELATIONSHIP WITH OTHERS', 'skill_type' => $types[0] ],
            [ 'name' => 'POLITENESS', 'skill_type' => $types[0] ],
            [ 'name' => 'ALERTNESS', 'skill_type' => $types[0] ],
            [ 'name' => 'HANDWRITING', 'skill_type' => $types[1] ],
            [ 'name' => 'GAMES & SPORTS', 'skill_type' => $types[1] ],
            [ 'name' => 'DRAWING & ARTS', 'skill_type' => $types[1] ],
            [ 'name' => 'PAINTING', 'skill_type' => $types[1] ],
            [ 'name' => 'CONSTRUCTION', 'skill_type' => $types[1] ],
            [ 'name' => 'MUSICAL SKILLS', 'skill_type' => $types[1] ],
            [ 'name' => 'FLEXIBILITY', 'skill_type' => $types[1] ],

        ];
        DB::table('skills')->insert($d);
    }

}
