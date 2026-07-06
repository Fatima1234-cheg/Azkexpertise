<?php

namespace App\Http\Controllers;

use App\Mail\ContactValidationEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email',
            'subject' => 'required|string',
            'message' => 'nullable|string',
        ]);

        // Log the contact request
        Log::info('Nouvelle demande de contact', [
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Votre demande a été envoyée avec succès !'
        ]);
    }

    public function sendValidationEmail(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
        ]);

        try {
            // Envoyer l'email réel
            Mail::to($request->email)->send(new ContactValidationEmail($request->name));

            Log::info('Email de validation envoyé avec succès', [
                'name' => $request->name,
                'email' => $request->email,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Email de validation envoyé avec succès !'
            ]);
        } catch (\Exception $e) {
            Log::error('Erreur lors de l\'envoi de l\'email de validation', [
                'error' => $e->getMessage(),
                'name' => $request->name,
                'email' => $request->email,
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.'
            ], 500);
        }
    }
}
