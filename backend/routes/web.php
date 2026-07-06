<?php
use Illuminate\Support\Facades\Route;


Route::get('/locale', function () {
    return response()->json(['locale' => app()->getLocale()]);
});
Route::get('/', function () {
    return view('welcome');
});
// routes/api.php


