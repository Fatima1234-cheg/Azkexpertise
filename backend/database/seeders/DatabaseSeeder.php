<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Compte Admin 1
        User::factory()->create([
            'name' => 'Fatima Chegdani',
            'email' => 'chegdanifatima82@gmail.com',
            'password' => Hash::make('password123'),
        ]);

        // Compte Admin 2
        User::factory()->create([
            'name' => 'Admin Secondaire',
            'email' => 'admin2@azkexpertise.com',
            'password' => Hash::make('password123'),
        ]);
    }
}
