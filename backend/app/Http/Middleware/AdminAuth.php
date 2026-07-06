<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminAuth
{
    // app/Http/Middleware/AdminAuth.php
public function handle(Request $request, Closure $next)
{
    if (!$request->user() || !$request->user() instanceof \App\Models\Admin) {
        return response()->json(['message' => 'Non autorisé'], 401);
    }
    return $next($request);
}
}
