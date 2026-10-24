<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;

class PasswordResetController extends Controller
{
    public function sendResetLink(Request $request)
    {
        try {
            // 1. Validation
            $request->validate([
                'email' => 'required|email|exists:users,email'
            ]);

            // 2. Vérifier si l'utilisateur existe
            $user = DB::table('users')->where('email', $request->email)->first();
            
            if (!$user) {
                return response()->json([
                    'message' => '❌ Aucun compte trouvé avec cet email.'
                ], 400);
            }

            // 3. Générer un nouveau mot de passe aléatoire
            $newPassword = Str::random(8);

            // 4. Mettre à jour le mot de passe dans la base de données
            DB::table('users')
                ->where('email', $request->email)
                ->update([
                    'password' => bcrypt($newPassword),
                    'updated_at' => now()
                ]);

            // 5. Envoyer l'email avec le nouveau mot de passe
            Mail::raw(
                "Bonjour,\n\n" .
                "Vous avez demandé la réinitialisation de votre mot de passe.\n\n" .
                "Votre nouveau mot de passe est :\n\n" .
                "Mot de passe : $newPassword\n\n" .
                "Nous vous recommandons de modifier ce mot de passe immédiatement après vous être connecté.\n\n" .
                "Si vous n'êtes pas à l'origine de cette demande, veuillez nous contacter immédiatement.\n\n" .
                "Cordialement,\n" .
                "L'équipe AZK Expertise",
                function ($message) use ($request) {
                    $message->to($request->email)
                            ->subject('Nouveau mot de passe - AZK Expertise');
                }
            );

            return response()->json([
                'message' => '✅ Un nouveau mot de passe a été envoyé à votre email.'
            ]);

        } catch (\Exception $e) {
            // Log de l'erreur
            \Log::error('Erreur reset password: ' . $e->getMessage());
            
            return response()->json([
                'message' => '❌ Erreur: ' . $e->getMessage()
            ], 500);
        }
    }
}