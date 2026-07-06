<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;

class SetLocale
{
    /**
     * Liste des langues disponibles
     */
    protected $locales = ['fr', 'ar', 'en'];

    /**
     * Gestion de la locale pour les requêtes entrantes.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // 1. Priorité absolue : cookie "locale" (défini par l'utilisateur)
        $locale = $request->cookie('locale');

        // 2. Si pas de cookie, on regarde la session (si disponible)
        if (!$locale && $request->hasSession() && $request->session()->has('locale')) {
            $locale = $request->session()->get('locale');
        }

        // 3. Sinon, on utilise la détection automatique via Accept-Language
        if (!$locale) {
            $locale = $request->getPreferredLanguage($this->locales);
        }

        // 4. Si aucune détection, on prend le français par défaut
        if (!$locale || !in_array($locale, $this->locales)) {
            $locale = 'fr';
        }

        // Définition de la locale pour Laravel
        App::setLocale($locale);

        // On stocke la locale dans la session pour les requêtes suivantes (si disponible)
        if ($request->hasSession()) {
            $request->session()->put('locale', $locale);
        }

        // On répond avec un cookie pour que le frontend puisse lire la locale choisie
        // (optionnel, mais utile pour que le frontend sache quelle langue est active)
        $response = $next($request);
        $response->cookie('locale', $locale, 60 * 24 * 365, '/', null, false, false);

        // On peut aussi ajouter un en-tête de réponse pour la locale (pratique pour Vue)
        $response->headers->set('X-Locale', $locale);

        return $response;
    }
}