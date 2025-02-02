<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Expert>
 */
class ExpertFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(), // Create a user for the expert
            'expertise' => fake()->randomElement(['Web Development', 'Cyber Security', 'Data Science']),
            'bio' => fake()->paragraph(),
            'experience_years' => fake()->numberBetween(1, 20),
            'hourly_rate' => fake()->randomFloat(2, 10, 100), // Generate decimal values
            'profile_picture' => fake()->imageUrl(200, 200, 'people'),
            'status' => fake()->randomElement(['pending', 'approved', 'rejected']),
        ];
    }
}
