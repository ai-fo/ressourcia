import { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { StorySection } from '../features/storytelling/StorySection';
import { InteractiveSection } from '../features/interactive/InteractiveSection';
import { ExplanationSection } from '../features/explanations/ExplanationSection';
import './WhatIsAIPage.css';

export const WhatIsAIPage = () => {
  const [userChoices, setUserChoices] = useState<string[]>([]);

  const storyContent = {
    title: "L'histoire d'Alice et de son assistant magique",
    content: `Alice était une inventrice géniale mais terriblement désorganisée. Ses idées brillantes se perdaient dans des montagnes de papiers, et elle oubliait constamment où elle avait rangé ses outils.

Un jour, fatiguée de chercher son tournevis pour la 100ème fois, elle décida de créer un assistant très spécial. Pas un humain, pas un robot classique, mais quelque chose de nouveau : une machine qui pourrait apprendre de ses habitudes.

"Si seulement tu pouvais comprendre que je range TOUJOURS mon tournevis dans le tiroir du bas... sauf le mardi où je le mets sur l'étagère !" soupirait-elle.

C'est alors qu'elle eut l'illumination : et si elle créait une machine capable d'observer, d'apprendre et de prédire ? Une machine qui ne suivrait pas bêtement des instructions, mais qui comprendrait les patterns de son comportement chaotique ?

Ainsi naquit ALBERT (Assistant Logique Brillamment Entraîné pour Retrouver des Trucs), la première IA d'Alice. Au début, ALBERT était nul. Vraiment nul. Il cherchait le tournevis dans le frigo ! Mais jour après jour, il observait, apprenait, s'améliorait...

Jusqu'au jour magique où Alice s'exclama : "ALBERT, où est mon tournevis ?" 
"C'est mardi, donc sur l'étagère, troisième rayon, derrière la boîte de vis", répondit ALBERT.
Il avait raison. Pour la première fois, une machine avait vraiment compris.`,
    fact: {
      title: "💡 Le saviez-vous ?",
      description: `En 1950, Alan Turing a proposé le "Test de Turing" : si une machine peut avoir une conversation si naturelle qu'on ne peut pas la distinguer d'un humain, alors on peut dire qu'elle "pense". Aujourd'hui, certaines IA réussissent ce test... mais comprennent-elles vraiment ou font-elles juste semblant ? Le débat continue !`,
    },
  };

  const explanationContent = {
    title: "L'IA démystifiée : Comprendre sans le jargon",
    sections: [
      {
        subtitle: "C'est quoi une IA, vraiment ?",
        content: `Une Intelligence Artificielle, c'est comme un élève très, TRÈS motivé qui apprend en observant des millions d'exemples. Imaginez que vous montriez à quelqu'un 10 000 photos de chats et 10 000 photos de chiens. Au bout d'un moment, cette personne saura distinguer un chat d'un chien, même sur une photo qu'elle n'a jamais vue.

L'IA fait exactement ça, mais en version turbo ! Elle peut analyser des millions d'exemples en quelques heures et découvrir des patterns (des motifs répétitifs) que même nous, humains, on ne verrait pas.`,
      },
      {
        subtitle: "Les 3 super-pouvoirs de l'IA",
        content: `1. **La Reconnaissance** : L'IA peut identifier des objets, des visages, des voix, du texte... C'est comme avoir des super-yeux et super-oreilles qui ne se fatiguent jamais.

2. **La Prédiction** : En analysant le passé, l'IA peut deviner le futur. "Si tu as aimé ce film, tu adoreras celui-là !" ou "Il va pleuvoir dans 2 heures".

3. **La Génération** : L'IA peut créer du nouveau contenu : écrire des histoires, composer de la musique, dessiner des images... Comme un artiste qui aurait étudié toutes les œuvres du monde.`,
      },
      {
        subtitle: "L'IA dans ta vie quotidienne",
        content: `Tu utilises déjà l'IA tous les jours sans t'en rendre compte :

• **Ton téléphone** : Reconnaissance faciale, correction automatique, suggestions de mots
• **Les réseaux sociaux** : Fil d'actualité personnalisé, filtres photo fun
• **Netflix/YouTube** : "Parce que vous avez regardé..."
• **Les jeux vidéo** : Ennemis qui s'adaptent à ta façon de jouer
• **La musique** : Playlists personnalisées sur Spotify
• **Les achats en ligne** : "Les clients qui ont acheté ceci ont aussi aimé..."`,
      },
      {
        subtitle: "Ce que l'IA ne peut PAS faire (pour l'instant)",
        content: `Malgré ses super-pouvoirs, l'IA a ses limites :

• **Comprendre vraiment** : L'IA reconnaît des patterns, mais comprend-elle ce qu'est un chat ou répète-t-elle juste ce qu'elle a appris ?
• **Avoir des émotions** : L'IA peut simuler des émotions, mais elle ne ressent pas la joie, la tristesse ou l'amour
• **Le bon sens** : L'IA peut savoir que "il pleut" et "prendre un parapluie" vont ensemble, mais elle ne comprend pas pourquoi on veut rester sec
• **La créativité pure** : L'IA mélange ce qu'elle connaît, mais peut-elle vraiment inventer quelque chose de totalement nouveau ?`,
      },
    ],
    keyPoints: [
      "L'IA apprend par l'exemple, comme un enfant mais en version accélérée",
      'Elle excelle dans la reconnaissance de patterns et les tâches répétitives',
      "L'IA est déjà partout dans notre quotidien",
      "Elle a des limites importantes : pas de conscience, pas d'émotions, pas de vrai bon sens",
      "L'IA est un outil puissant, ni magique ni effrayant, juste... différent",
    ],
  };

  const handleGameChoice = (choice: string) => {
    setUserChoices([...userChoices, choice]);
  };

  return (
    <PageLayout>
      <div className="what-is-ai-page">
        <div className="liquid-background">
          <div className="liquid-blob liquid-blob-1"></div>
          <div className="liquid-blob liquid-blob-2"></div>
          <div className="liquid-blob liquid-blob-3"></div>
        </div>

        <header className="page-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="page-title">
                <span className="title-gradient">Qu'est-ce que l'IA ?</span>
              </h1>
              <p className="page-subtitle">
                Découvre le monde fascinant de l'intelligence artificielle
              </p>
            </div>
            <div className="hero-image-container">
              <img 
                src="/images/concepts/questcequelia.png" 
                alt="Qu'est-ce que l'IA ?" 
                className="hero-image"
              />
              <div className="image-liquid-effect"></div>
            </div>
          </div>
        </header>

        <StorySection story={storyContent} />

        <InteractiveSection>
          <div className="ai-detective-game">
            <h3>🕵️ Deviens détective de l'IA !</h3>
            <p>
              Trouve les IA cachées dans ces situations du quotidien. Clique sur
              tout ce qui utilise l'IA !
            </p>

            <div className="game-scenarios">
              <div className="scenario-card">
                <div className="scenario-image">📱</div>
                <h4>Le Smartphone de Sophie</h4>
                <div className="clickable-items">
                  <button
                    className={`item-btn ${userChoices.includes('face-unlock') ? 'found' : ''}`}
                    onClick={() => handleGameChoice('face-unlock')}
                  >
                    🔓 Déverrouillage facial
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('calculator') ? 'wrong' : ''}`}
                    onClick={() => handleGameChoice('calculator')}
                  >
                    🧮 Calculatrice
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('auto-correct') ? 'found' : ''}`}
                    onClick={() => handleGameChoice('auto-correct')}
                  >
                    ✏️ Correction automatique
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('flashlight') ? 'wrong' : ''}`}
                    onClick={() => handleGameChoice('flashlight')}
                  >
                    🔦 Lampe torche
                  </button>
                </div>
              </div>

              <div className="scenario-card">
                <div className="scenario-image">🎮</div>
                <h4>La Console de Théo</h4>
                <div className="clickable-items">
                  <button
                    className={`item-btn ${userChoices.includes('game-ai') ? 'found' : ''}`}
                    onClick={() => handleGameChoice('game-ai')}
                  >
                    👾 Ennemis adaptatifs
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('controller') ? 'wrong' : ''}`}
                    onClick={() => handleGameChoice('controller')}
                  >
                    🎯 Vibration manette
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('voice-commands') ? 'found' : ''}`}
                    onClick={() => handleGameChoice('voice-commands')}
                  >
                    🎤 Commandes vocales
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('save-game') ? 'wrong' : ''}`}
                    onClick={() => handleGameChoice('save-game')}
                  >
                    💾 Sauvegarder partie
                  </button>
                </div>
              </div>

              <div className="scenario-card">
                <div className="scenario-image">🏠</div>
                <h4>La Maison de Maria</h4>
                <div className="clickable-items">
                  <button
                    className={`item-btn ${userChoices.includes('smart-speaker') ? 'found' : ''}`}
                    onClick={() => handleGameChoice('smart-speaker')}
                  >
                    🔊 Enceinte connectée
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('microwave') ? 'wrong' : ''}`}
                    onClick={() => handleGameChoice('microwave')}
                  >
                    🍕 Micro-ondes
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('recommendation') ? 'found' : ''}`}
                    onClick={() => handleGameChoice('recommendation')}
                  >
                    📺 Netflix suggestions
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('light-switch') ? 'wrong' : ''}`}
                    onClick={() => handleGameChoice('light-switch')}
                  >
                    💡 Interrupteur
                  </button>
                </div>
              </div>
            </div>

            <div className="game-score">
              <p>
                Tu as trouvé{' '}
                {
                  userChoices.filter((c) =>
                    [
                      'face-unlock',
                      'auto-correct',
                      'game-ai',
                      'voice-commands',
                      'smart-speaker',
                      'recommendation',
                    ].includes(c)
                  ).length
                }{' '}
                IA sur 6 !
              </p>
              {userChoices.filter((c) =>
                [
                  'face-unlock',
                  'auto-correct',
                  'game-ai',
                  'voice-commands',
                  'smart-speaker',
                  'recommendation',
                ].includes(c)
              ).length === 6 && (
                <p className="success-message">
                  🎉 Bravo ! Tu es un vrai détective de l'IA !
                </p>
              )}
            </div>
          </div>
        </InteractiveSection>

        <section className="history-section">
          <h2 className="history-title">📚 L'Histoire Fascinante de l'IA</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">1950</div>
              <div className="timeline-content">
                <h3>Le Test de Turing</h3>
                <p>Alan Turing imagine un test simple : si une machine peut discuter avec toi sans que tu devines que c'est une machine, alors elle "pense". C'était révolutionnaire !</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">1956</div>
              <div className="timeline-content">
                <h3>Naissance de l'IA</h3>
                <p>Des scientifiques se réunissent à Dartmouth et décident : "On va créer des machines intelligentes !" Spoiler : c'était plus dur que prévu...</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">1966</div>
              <div className="timeline-content">
                <h3>ELIZA, la première psy robot</h3>
                <p>Un programme qui fait semblant d'être psychologue. Les gens lui racontent leur vie ! Preuve que les humains veulent vraiment parler à quelqu'un... même une machine.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">1997</div>
              <div className="timeline-content">
                <h3>Deep Blue bat Kasparov</h3>
                <p>Pour la première fois, un ordinateur bat le champion du monde d'échecs ! Les humains commencent à se dire : "Oups, elles deviennent fortes ces machines..."</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2011</div>
              <div className="timeline-content">
                <h3>Siri dit "Bonjour !"</h3>
                <p>Apple lance Siri et soudain, tout le monde parle à son téléphone. "Dis Siri, raconte-moi une blague !" devient la phrase la plus prononcée au monde.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2016</div>
              <div className="timeline-content">
                <h3>AlphaGo, maître du Go</h3>
                <p>L'IA de Google bat le champion du monde de Go, un jeu si complexe qu'on pensait qu'aucune machine ne pourrait y jouer. Plot twist : elle invente des coups que personne n'avait imaginés !</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h3>ChatGPT débarque</h3>
                <p>OpenAI lance ChatGPT et c'est la folie ! Tout le monde lui demande de faire ses devoirs, d'écrire des poèmes, ou juste de discuter. L'IA devient mainstream.</p>
              </div>
            </div>

            <div className="timeline-item timeline-item-future">
              <div className="timeline-date">Futur</div>
              <div className="timeline-content">
                <h3>Et maintenant ?</h3>
                <p>L'IA continue d'évoluer ! Qui sait, peut-être qu'un jour elle nous aidera à explorer l'espace, soigner toutes les maladies, ou... enfin comprendre pourquoi on perd toujours une chaussette dans la machine à laver !</p>
              </div>
            </div>
          </div>
        </section>

        <ExplanationSection explanation={explanationContent} />

        <section className="back-home-section">
          <div className="back-home-content">
            <h3>Tu veux découvrir d'autres concepts ?</h3>
            <p>Retourne à la page d'accueil pour explorer plus de sujets passionnants sur l'IA !</p>
            <button 
              className="back-home-btn"
              onClick={() => window.location.href = '/'}
            >
              <span className="btn-icon">🏠</span>
              <span className="btn-text">Retour à l'accueil</span>
            </button>
          </div>
          <div className="floating-shapes-small">
            <div className="shape-small shape-small-1"></div>
            <div className="shape-small shape-small-2"></div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
