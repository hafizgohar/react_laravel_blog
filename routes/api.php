<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('addPost', [PostController::class, 'addPost']);

Route::get('getPost', [PostController::class, 'getPost']);
Route::get('retrievePost/{id}', [PostController::class, 'retrievePost']);
Route::patch('editPost/{id}', [PostController::class, 'editPost']);
