<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\WysywigController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/tiny', [WysywigController::class, 'tiny']);

    Route::get('/trix', [WysywigController::class, 'trix']);

    Route::get('/tiny2', [WysywigController::class, 'tiny2']);

    Route::get('/froala', [WysywigController::class, 'froala']);

    Route::get('/tiny-results', [WysywigController::class, 'tinyResults']);


    Route::get('/post/{post}', [PostController::class, 'show']);
    Route::get('/post/{post}/edit', [PostController::class, 'edit']);

});