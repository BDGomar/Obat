<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContactFormMail;
use App\Mail\ContactConfirmationMail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'company' => 'nullable|string|max:255',
            'role' => 'nullable|string|max:255',
            'need' => 'required|string|max:255',
            'challenge' => 'required|string',
            'budget' => 'nullable|string|max:255',
            'source' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Veuillez remplir tous les champs obligatoires.',
                'errors' => $validator->errors()
            ], 400);
        }

        try {
            $data = $request->all();

            // Envoyer l'email à contact@digitgroup.site
            Mail::to('contact@digitgroup.site')
                ->send(new ContactFormMail($data));

            // Envoyer l'email de confirmation au client
            Mail::to($data['email'])
                ->send(new ContactConfirmationMail($data));

            return response()->json([
                'success' => true,
                'message' => 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt !'
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Erreur lors de l\'envoi de l\'email: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement.'
            ], 500);
        }
    }
}
