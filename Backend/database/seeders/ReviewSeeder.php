<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Review;
use App\Models\User;
use App\Models\Expert;
class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $users = User::where('role', 'user')->get();
        $experts = Expert::all();

        foreach ($users as $user) {
            Review::create([
                'user_id' => $user->id,
                'expert_id' => $experts->random()->id,
                'rating' => rand(3, 5), // Ratings between 3 to 5
                'comment' => 'Great session! Learned a lot.',
            ]);
        }
    }
}
