<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0;
            padding: 0;
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 0;
        }
        .header { 
            background: #E31837; 
            color: white; 
            padding: 30px 20px; 
            text-align: center; 
        }
        .header h2 {
            margin: 0;
            font-size: 24px;
        }
        .content { 
            background: #f9f9f9; 
            padding: 30px 20px; 
        }
        .content p {
            margin-bottom: 15px;
        }
        .content ul {
            margin: 20px 0;
            padding-left: 20px;
        }
        .content li {
            margin-bottom: 10px;
        }
        .footer {
            background: #1a1a1a;
            color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Merci pour votre demande !</h2>
        </div>
        <div class="content">
            <p>Bonjour {{ $data['name'] }},</p>
            <p>Nous avons bien reçu votre demande de contact concernant <strong>
                @php
                    $needLabels = [
                        'bi' => 'Business Intelligence & Analytics',
                        'loi25' => 'Conformité Loi 25',
                        'dev' => 'Développement d\'application',
                        'ia' => 'IA & Automatisation',
                        'formation' => 'Formation',
                        'autre' => 'Autre'
                    ];
                @endphp
                {{ $needLabels[$data['need']] ?? $data['need'] }}
            </strong>.</p>
            <p>Notre équipe va examiner votre demande et vous contactera dans les plus brefs délais.</p>
            <p>En attendant, n'hésitez pas à nous contacter directement :</p>
            <ul>
                <li><strong>Email:</strong> info@obatservices.com</li>
                <li><strong>Téléphone:</strong> +1 438-886-9239</li>
            </ul>
            <p>Cordialement,<br><strong>L'équipe Obat Services</strong></p>
        </div>
        <div class="footer">
            <p>Obat Services - Transformez vos données en décisions stratégiques</p>
            <p>101-7650 13e avenue, Montréal, Québec H2A 2X7</p>
        </div>
    </div>
</body>
</html>

