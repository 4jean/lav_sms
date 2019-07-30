<?php

namespace App\Http\Middleware\Custom;

use Closure;
use App\Helpers\Fn;
use Illuminate\Support\Facades\Auth;

class TeamAccount
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
        return (Auth::check() && Fn::userIsTeamAccount()) ? $next($request) : redirect()->route('login');
    }
}
