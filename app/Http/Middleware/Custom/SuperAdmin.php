<?php

namespace App\Http\Middleware\Custom;

use Closure;
use App\Helpers\Fn;
use Illuminate\Support\Facades\Auth;

class SuperAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return (Auth::check() && Fn::userIsSuperAdmin()) ? $next($request) : redirect()->route('login');
    }
}
