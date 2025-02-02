<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Payment;
use App\Models\Booking;
use Illuminate\Support\Str;
class PaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $bookings = Booking::all();

        foreach ($bookings as $booking) {
            Payment::create([
                'booking_id' => $booking->id,
                'user_id' => $booking->user_id,
                'expert_id' => $booking->expert_id,
                'amount' => $booking->expert->hourly_rate * ($booking->duration / 60),
                'payment_status' => 'completed',
                'payment_method' => 'credit_card',
                'transaction_id' => Str::uuid(),
            ]);
        }
    }
}
