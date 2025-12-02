<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

// Route pour les requêtes OPTIONS (preflight CORS)
Route::options('/contact', function () {
    return response()->json([], 200);
});

// Route pour les requêtes POST
Route::post('/contact', [ContactController::class, 'store']);

