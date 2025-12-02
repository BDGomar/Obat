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
        .field { 
            margin-bottom: 20px; 
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e0e0;
        }
        .field:last-child {
            border-bottom: none;
        }
        .label { 
            font-weight: bold; 
            color: #E31837; 
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .value { 
            margin-top: 5px; 
            color: #333;
            font-size: 16px;
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
            <h2>Nouvelle demande de contact - Obat Services</h2>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Nom complet</div>
                <div class="value">{{ $data['name'] }}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value">{{ $data['email'] }}</div>
            </div>
            @if(!empty($data['phone']))
            <div class="field">
                <div class="label">Téléphone</div>
                <div class="value">{{ $data['phone'] }}</div>
            </div>
            @endif
            @if(!empty($data['company']))
            <div class="field">
                <div class="label">Entreprise</div>
                <div class="value">{{ $data['company'] }}</div>
            </div>
            @endif
            @if(!empty($data['role']))
            <div class="field">
                <div class="label">Rôle</div>
                <div class="value">{{ $data['role'] }}</div>
            </div>
            @endif
            <div class="field">
                <div class="label">Type de besoin</div>
                <div class="value">
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
                </div>
            </div>
            <div class="field">
                <div class="label">Défi principal</div>
                <div class="value">{{ $data['challenge'] }}</div>
            </div>
            @if(!empty($data['budget']))
            <div class="field">
                <div class="label">Budget approximatif</div>
                <div class="value">
                    @php
                        $budgetLabels = [
                            '<10k' => 'Moins de 10 000 $',
                            '10-25k' => '10 000 $ - 25 000 $',
                            '25-50k' => '25 000 $ - 50 000 $',
                            '50-100k' => '50 000 $ - 100 000 $',
                            '>100k' => 'Plus de 100 000 $',
                        ];
                    @endphp
                    {{ $budgetLabels[$data['budget']] ?? $data['budget'] }}
                </div>
            </div>
            @endif
            @if(!empty($data['source']))
            <div class="field">
                <div class="label">Comment nous avez-vous connu</div>
                <div class="value">
                    @php
                        $sourceLabels = [
                            'google' => 'Recherche Google',
                            'linkedin' => 'LinkedIn',
                            'recommandation' => 'Recommandation',
                            'reseaux' => 'Réseaux sociaux',
                            'autre' => 'Autre',
                        ];
                    @endphp
                    {{ $sourceLabels[$data['source']] ?? $data['source'] }}
                </div>
            </div>
            @endif
        </div>
        <div class="footer">
            <p>Obat Services - Transformez vos données en décisions stratégiques</p>
            <p>101-7650 13e avenue, Montréal, Québec H2A 2X7</p>
        </div>
    </div>
</body>
</html>

