<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TranslationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;

Route::post('/translate', [TranslationController::class, 'translate']);
Route::get('/translations/{locale}', [TranslationController::class, 'getTranslations']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::post('/contact', [ContactController::class, 'send']);
Route::post('/contact/validate', [ContactController::class, 'sendValidationEmail']);
