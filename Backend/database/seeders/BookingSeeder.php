<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Booking;
use App\Models\User;
use App\Models\Expert;
use Carbon\Carbon;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $users = User::where('role', 'user')->get();
        $experts = Expert::all();

        foreach ($users as $user) {
            Booking::create([
                'user_id' => $user->id,
                'expert_id' => $experts->random()->id,
                'scheduled_at' => Carbon::now()->addDays(rand(1, 30)),
                'duration' => rand(30, 120),
                'status' => 'pending',
                'notes' => 'Looking for career guidance in web development.',
            ]);
        }
    }
}
