<?php

use Illuminate\Support\Facades\Route;
use App\Mail\TestMail;
Route::get('/', function () {
    return ['Laravel' => app()->version()];
});


Route::get('/send-test-mail', function () {
    Mail::to('admin@ayusht3.in')->send(new TestMail('Ayush'));
    return 'Test email has been sent!';
});

Route::get('/listusers', function () {
    return App\Models\User::all();
});

require __DIR__.'/auth.php';
