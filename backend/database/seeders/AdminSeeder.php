<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
// database/seeders/AdminSeeder.php
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
class AdminSeeder extends Seeder
{
   
   

public function run()
{
    Admin::create([
        'name' => 'Fatima Chegdani',
        'email' => 'chegdanifatima82@gmail.com',
        'password' => Hash::make('FATIMA@12345'),
    ]);

    Admin::create([
        'name' => 'Administrateur',
        'email' => 'admin2@azkexpertise.ma',
        'password' => Hash::make('azk12345'),
    ]);
}
}
