<?php

namespace App\Providers;

use App\Helpers\Qs;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Request;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Route::bind('id', function ($value) {
            return Qs::decodeHash($value);
        });

        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60);
        });

        Paginator::useBootstrapFour();
    }
}
