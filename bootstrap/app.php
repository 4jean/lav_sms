<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Support\Facades\Route;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        then: function (Application $app) {
            Route::namespace('App\Http\Controllers')
                ->middleware('web')
                ->group(__DIR__.'/../routes/web.php');
        }
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
        $middleware->alias([
            'admin' => \App\Http\Middleware\Custom\Admin::class,
            'super_admin' => \App\Http\Middleware\Custom\SuperAdmin::class,
            'teamSA' => \App\Http\Middleware\Custom\TeamSA::class,
            'teamSAT' => \App\Http\Middleware\Custom\TeamSAT::class,
            'teamAccount' => \App\Http\Middleware\Custom\TeamAccount::class,
            'examIsLocked' => \App\Http\Middleware\Custom\ExamIsLocked::class,
            'my_parent' => \App\Http\Middleware\Custom\MyParent::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
