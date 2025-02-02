<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Skill;
class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Skill::create(['name' => 'PHP']);
        Skill::create(['name' => 'Laravel']);
        Skill::create(['name' => 'JavaScript']);
    }
}
