<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Votre demande est en cours</title>
    <style>
        body {
            font-family: 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8faff;
        }
        .email-container {
            max-width: 600px;
            margin: 40px auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        .email-header {
            background: #0a2a4a;
            color: white;
            padding: 25px 30px;
            border-bottom: 3px solid #C6A15B;
        }
        .email-header h1 {
            margin: 0;
            font-size: 1.6rem;
        }
        .email-content {
            padding: 40px 30px;
        }
        .email-content h2 {
            color: #0a2a4a;
            font-size: 1.5rem;
            margin-bottom: 15px;
            font-family: Georgia, serif;
        }
        .email-content p {
            color: #3d4f5e;
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 15px;
        }
        .email-content .highlight {
            background: rgba(198, 161, 91, 0.15);
            padding: 15px 20px;
            border-left: 4px solid #C6A15B;
            border-radius: 8px;
            margin: 25px 0;
        }
        .email-footer {
            padding: 20px 30px;
            background: #f8faff;
            text-align: center;
            color: #5B7B9A;
            font-size: 0.9rem;
        }
        .btn {
            display: inline-block;
            background: #C6A15B;
            color: #0a2a4a;
            padding: 12px 28px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 20px;
            transition: background 0.3s;
        }
        .btn:hover {
            background: #D4AF37;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>AZK Expertise</h1>
        </div>
        <div class="email-content">
            <h2>Bonjour {{ $name }},</h2>
            <p>Merci pour votre demande de contact !</p>
            
            <div class="highlight">
                <p><strong>Votre demande est maintenant en cours !</strong></p>
                <p>Vous pouvez dès à présent nous envoyer les documents nécessaires pour l'évaluation de votre cas.</p>
            </div>
            
            <p>N'hésitez pas à nous contacter si vous avez besoin de plus d'informations.</p>
            
            <p>Cordialement,<br>L'équipe AZK Expertise</p>
        </div>
        <div class="email-footer">
            <p>© 2026 AZK Expertise. Tous droits réservés.</p>
        </div>
    </div>
</body>
</html>