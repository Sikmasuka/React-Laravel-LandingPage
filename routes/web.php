<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('landing-page', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('landing-page');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/login', fn() => Inertia::render('auth/login'))->name('login');
if (Features::enabled(Features::registration())) {
    Route::get('/register', fn() => Inertia::render('auth/register'))->name('register');
}


require __DIR__ . '/settings.php';
