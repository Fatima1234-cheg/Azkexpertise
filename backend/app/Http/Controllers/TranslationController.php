<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TranslationController extends Controller
{
    /**
     * Translate text from one language to another
     */
    public function translate(Request $request)
    {
        $request->validate([
            'text' => 'required|string',
            'from' => 'required|string|in:fr,ar,en',
            'to' => 'required|string|in:fr,ar,en',
        ]);

        $text = $request->input('text');
        $from = $request->input('from');
        $to = $request->input('to');

        if ($from === $to) {
            return response()->json([
                'success' => true,
                'original' => $text,
                'translated' => $text,
                'from' => $from,
                'to' => $to,
            ]);
        }

        $translatedText = $this->performTranslation($text, $from, $to);

        return response()->json([
            'success' => true,
            'original' => $text,
            'translated' => $translatedText,
            'from' => $from,
            'to' => $to,
        ]);
    }

    /**
     * Simple internal translation as fallback
     */
    private function performTranslation($text, $from, $to)
    {
        $dictionary = [
            'fr' => [
                'en' => [
                    'bonjour' => 'hello',
                    'salut' => 'hi',
                    'merci' => 'thank you',
                    'au revoir' => 'goodbye',
                ],
                'ar' => [
                    'bonjour' => 'مرحبا',
                    'salut' => 'مرحبا',
                    'merci' => 'شكرا',
                    'au revoir' => 'مع السلامة',
                ]
            ],
            'en' => [
                'fr' => [
                    'hello' => 'bonjour',
                    'hi' => 'salut',
                    'thank you' => 'merci',
                    'goodbye' => 'au revoir',
                ],
                'ar' => [
                    'hello' => 'مرحبا',
                    'hi' => 'مرحبا',
                    'thank you' => 'شكرا',
                    'goodbye' => 'مع السلامة',
                ]
            ],
            'ar' => [
                'fr' => [
                    'مرحبا' => 'bonjour',
                    'شكرا' => 'merci',
                    'مع السلامة' => 'au revoir',
                ],
                'en' => [
                    'مرحبا' => 'hello',
                    'شكرا' => 'thank you',
                    'مع السلامة' => 'goodbye',
                ]
            ]
        ];

        $lowerText = strtolower(trim($text));
        if (isset($dictionary[$from][$to][$lowerText])) {
            return $dictionary[$from][$to][$lowerText];
        }

        return $text . ' (translation unavailable - add API key for full translation)';
    }

    /**
     * Get all available translations
     */
    public function getTranslations($locale)
    {
        $translations = [];
        $path = lang_path($locale . '/messages.php');
        if (file_exists($path)) {
            $translations = include $path;
        }
        return response()->json([
            'success' => true,
            'locale' => $locale,
            'translations' => $translations,
        ]);
    }
}
