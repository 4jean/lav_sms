<?php

namespace App\Http\Middleware\Custom;

use Closure;
use Illuminate\Support\Facades\DB;

class RequireLicensedModule
{
    public function handle($request, Closure $next, $moduleCode)
    {
        $user = $request->user();
        abort_unless($user, 401);

        if (!$user->school_id) {
            return $next($request);
        }

        $licensed = DB::table('school_module_licenses as sml')
            ->join('modules as m', 'm.id', '=', 'sml.module_id')
            ->where('sml.school_id', $user->school_id)
            ->where('m.code', $moduleCode)
            ->where('m.active', true)
            ->where('sml.enabled', true)
            ->where('sml.starts_at', '<=', now())
            ->where('sml.ends_at', '>=', now())
            ->exists();

        abort_unless($licensed, 403, 'This module is not licensed for your school.');

        return $next($request);
    }
}
