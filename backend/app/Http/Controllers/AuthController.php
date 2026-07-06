<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $user = User::where('email', $credentials['email'])->first();
        
        if ($user && password_verify($credentials['password'], $user->password)) {            
            return response()->json([
                'success' => true,
                'message' => 'Connexion réussie',
                'user' => [
                    'name' => $user->name,
                    'email' => $user->email
                ],
                'token' => 'auth_' . uniqid()
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Identifiants incorrects'
        ], 401);
    }

    public function logout(Request $request)
    {
        return response()->json([
            'success' => true,
            'message' => 'Déconnexion réussie'
        ]);
    }
}
