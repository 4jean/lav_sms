<?php

namespace App\Http\Middleware\Custom;

use App\Helpers\Mk;
use Closure;

class ExamIsLocked
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return (Mk::examIsLocked()) ? $next($request) : redirect()->route('dashboard');
    }
}
