<?php

namespace App\Http\Middleware\Custom;

use Closure;
use Illuminate\Support\Facades\DB;

class CheckPermission
{
    public function handle($request, Closure $next, $permission)
    {
        $user = $request->user();
        abort_unless($user, 401);

        if (!$user->school_id) {
            return $next($request);
        }

        $allowed = DB::table('user_school_roles as usr')
            ->join('school_roles as sr', 'sr.id', '=', 'usr.school_role_id')
            ->join('role_permissions as rp', 'rp.school_role_id', '=', 'sr.id')
            ->join('permissions as p', 'p.id', '=', 'rp.permission_id')
            ->where('usr.user_id', $user->id)
            ->where('usr.school_id', $user->school_id)
            ->where('sr.school_id', $user->school_id)
            ->where('p.code', $permission)
            ->where('usr.active', true)
            ->where(function ($query) {
                $query->whereNull('usr.starts_at')->orWhere('usr.starts_at', '<=', now());
            })
            ->where(function ($query) {
                $query->whereNull('usr.ends_at')->orWhere('usr.ends_at', '>=', now());
            })
            ->exists();

        abort_unless($allowed, 403, 'You do not have permission to perform this action.');

        return $next($request);
    }
}
