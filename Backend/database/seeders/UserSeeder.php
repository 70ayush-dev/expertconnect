<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Ayush',
            'email' => 'ayush@ayusht3.in',
            'password' => Hash::make('password123')
        ]);

        User::factory(10)->create(); // Generate 10 random users
    }
}
