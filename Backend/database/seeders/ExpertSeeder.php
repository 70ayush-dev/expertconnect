<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Expert;
class ExpertSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Expert::create([
            'user_id' => 1, // Ensure this user exists in UserSeeder
            'expertise' => 'Web Development',
            'bio' => 'An experienced web developer specializing in Laravel and frontend technologies.',
            'experience_years' => 5,
            'hourly_rate' => 50.00,
            'profile_picture' => 'https://via.placeholder.com/200',
            'status' => 'approved',
        ]);

        Expert::factory(10)->create(); // Generate 10 random experts
    }
}
