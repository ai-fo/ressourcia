import { useState, useEffect } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { StorySection } from '../features/storytelling/StorySection';
import { InteractiveSection } from '../features/interactive/InteractiveSection';
import { ExplanationSection } from '../features/explanations/ExplanationSection';
import { BackHomePortal } from '../components/ui/BackHomePortal';
import { LiquidBackground } from '../components/common/LiquidBackground';
import { useAuth } from '../contexts/AuthContext';
import { useGamification } from '../contexts/GamificationContext';
import { StoryContent, ExplanationContent } from '../types';
import './WhatIsAIPage.css';

export const WhatIsAIPage = () => {
  const [userChoices, setUserChoices] = useState<string[]>([]);
  const [hasCompleted, setHasCompleted] = useState(false);
  const { user } = useAuth();
  const { completeChapter, progress, completeActivity } = useGamification();

  // Check if chapter is already completed
  useEffect(() => {
    const existingProgress = progress.find(
      (p) => p.conceptSlug === 'what-is-ai'
    );
    if (existingProgress?.completed) {
      setHasCompleted(true);
    }
  }, [progress]);

  // Complete chapter when game is won
  useEffect(() => {
    const correctAnswers = userChoices.filter((c) =>
      [
        'face-unlock',
        'auto-correct',
        'game-ai',
        'voice-commands',
        'smart-speaker',
        'recommendation',
        'gps-navigation',
        'parking-assist',
      ].includes(c)
    ).length;

    if (correctAnswers === 8 && user && !hasCompleted) {
      const score = Math.round((correctAnswers / 8) * 100);

      // Compléter le chapitre
      completeChapter('what-is-ai', score, 300); // 300 seconds estimated time
      setHasCompleted(true);

      // Compléter le jeu pour les points bonus
      completeActivity(
        'what-is-ai-detective-game',
        'game',
        score,
        20,
        'Jeu du détective IA complété avec succès'
      );
    }
  }, [userChoices, user, hasCompleted, completeChapter, completeActivity]);

  const storyContent: StoryContent = {
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
      title: '💡 Le saviez-vous ?',
      description: `En 1950, Alan Turing a proposé le "Test de Turing" : si une machine peut avoir une conversation si naturelle qu'on ne peut pas la distinguer d'un humain, alors on peut dire qu'elle "pense". Aujourd'hui, certaines IA réussissent ce test... mais comprennent-elles vraiment ou font-elles juste semblant ? Le débat continue !`,
    },
  };

  const explanationContent: ExplanationContent = {
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
        subtitle: "L'IA dans votre vie quotidienne",
        content: `Vous utilisez déjà l'IA tous les jours sans vous en rendre compte :

• **Votre téléphone** : Reconnaissance faciale, correction automatique, suggestions de mots
• **Les réseaux sociaux** : Fil d'actualité personnalisé, filtres photo fun
• **Netflix/YouTube** : "Parce que vous avez regardé..."
• **Les jeux vidéo** : Ennemis qui s'adaptent à votre façon de jouer
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
        <LiquidBackground variant="blue" />

        <header className="page-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="page-title">
                <span className="title-gradient">Qu'est-ce que l'IA ?</span>
              </h1>
              <p className="page-subtitle">
                Découvrez le monde fascinant de l'intelligence artificielle
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
            <h3>Devenez détective de l'IA !</h3>
            <p>
              Trouvez les IA cachées dans ces situations du quotidien. Cliquez
              sur tout ce qui utilise l'IA !
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

              <div className="scenario-card">
                <div className="scenario-image">🚗</div>
                <h4>La Voiture de Lucas</h4>
                <div className="clickable-items">
                  <button
                    className={`item-btn ${userChoices.includes('gps-navigation') ? 'found' : ''}`}
                    onClick={() => handleGameChoice('gps-navigation')}
                  >
                    🗺️ GPS intelligent
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('windshield-wipers') ? 'wrong' : ''}`}
                    onClick={() => handleGameChoice('windshield-wipers')}
                  >
                    🌧️ Essuie-glaces
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('parking-assist') ? 'found' : ''}`}
                    onClick={() => handleGameChoice('parking-assist')}
                  >
                    🅿️ Aide au stationnement
                  </button>
                  <button
                    className={`item-btn ${userChoices.includes('seat-belt') ? 'wrong' : ''}`}
                    onClick={() => handleGameChoice('seat-belt')}
                  >
                    🔒 Ceinture de sécurité
                  </button>
                </div>
              </div>
            </div>

            <div className="game-score">
              <p>
                Vous avez trouvé{' '}
                {
                  userChoices.filter((c) =>
                    [
                      'face-unlock',
                      'auto-correct',
                      'game-ai',
                      'voice-commands',
                      'smart-speaker',
                      'recommendation',
                      'gps-navigation',
                      'parking-assist',
                    ].includes(c)
                  ).length
                }{' '}
                IA sur 8 !
              </p>
              {userChoices.filter((c) =>
                [
                  'face-unlock',
                  'auto-correct',
                  'game-ai',
                  'voice-commands',
                  'smart-speaker',
                  'recommendation',
                  'gps-navigation',
                  'parking-assist',
                ].includes(c)
              ).length === 8 && (
                <div className="success-container">
                  <p className="success-message">
                    🎉 Bravo ! Vous êtes un vrai détective de l'IA !
                  </p>
                  {user && hasCompleted && (
                    <p className="points-earned">+20 points gagnés ! 🌟</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </InteractiveSection>

        <section className="history-section">
          <h2 className="history-title">L'Histoire Fascinante de l'IA</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">1950</div>
              <div className="timeline-content">
                <h3>
                  Le Test de Turing
                  <span className="timeline-year"> • 1950</span>
                </h3>
                <p>
                  Alan Turing imagine un test simple : si une machine peut
                  discuter avec toi sans que tu devines que c'est une machine,
                  alors elle "pense". C'était révolutionnaire !
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">1956</div>
              <div className="timeline-content">
                <h3>
                  Naissance de l'IA
                  <span className="timeline-year"> • 1956</span>
                </h3>
                <p>
                  Des scientifiques se réunissent à Dartmouth et décident : "On
                  va créer des machines intelligentes !" Spoiler : c'était plus
                  dur que prévu...
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">1966</div>
              <div className="timeline-content">
                <h3>
                  ELIZA, la première psy robot
                  <span className="timeline-year"> • 1966</span>
                </h3>
                <p>
                  Un programme qui fait semblant d'être psychologue. Les gens
                  lui racontent leur vie ! Preuve que les humains veulent
                  vraiment parler à quelqu'un... même une machine.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">1997</div>
              <div className="timeline-content">
                <h3>
                  Deep Blue bat Kasparov
                  <span className="timeline-year"> • 1997</span>
                </h3>
                <p>
                  Pour la première fois, un ordinateur bat le champion du monde
                  d'échecs ! Les humains commencent à se dire : "Oups, elles
                  deviennent fortes ces machines..."
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2011</div>
              <div className="timeline-content">
                <h3>
                  Siri dit "Bonjour !"
                  <span className="timeline-year"> • 2011</span>
                </h3>
                <p>
                  Apple lance Siri et soudain, tout le monde parle à son
                  téléphone. "Dis Siri, raconte-moi une blague !" devient la
                  phrase la plus prononcée au monde.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2016</div>
              <div className="timeline-content">
                <h3>
                  AlphaGo, maître du Go
                  <span className="timeline-year"> • 2016</span>
                </h3>
                <p>
                  L'IA de Google bat le champion du monde de Go, un jeu si
                  complexe qu'on pensait qu'aucune machine ne pourrait y jouer.
                  Plot twist : elle invente des coups que personne n'avait
                  imaginés !
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h3>
                  ChatGPT débarque<span className="timeline-year"> • 2022</span>
                </h3>
                <p>
                  OpenAI lance ChatGPT et c'est la folie ! Tout le monde lui
                  demande de faire ses devoirs, d'écrire des poèmes, ou juste de
                  discuter. L'IA devient mainstream.
                </p>
              </div>
            </div>

            <div className="timeline-item timeline-item-future">
              <div className="timeline-date">Futur</div>
              <div className="timeline-content">
                <h3>
                  Et maintenant ?<span className="timeline-year"> • Futur</span>
                </h3>
                <p>
                  L'IA continue d'évoluer ! Qui sait, peut-être qu'un jour elle
                  nous aidera à explorer l'espace, soigner toutes les maladies,
                  ou... enfin comprendre pourquoi on perd toujours une
                  chaussette dans la machine à laver !
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="technical-section">
          <h2 className="technical-title">
            Pour les curieux : L'IA expliquée plus en profondeur
          </h2>

          <div className="technical-content">
            <div className="tech-explanation">
              <p className="tech-intro">
                Maintenant qu'on a compris les bases, plongeons un peu plus dans
                les détails techniques. Ne vous inquiétez pas, on va rester
                accessible !
              </p>

              <h3>Comment une machine peut-elle "apprendre" ?</h3>
              <p>
                Au cœur de l'IA moderne, on trouve les{' '}
                <strong>réseaux de neurones artificiels</strong>. Inspirés du
                cerveau humain, ces réseaux sont composés de milliers (voire
                millions) de "neurones" artificiels organisés en couches. Chaque
                neurone est en fait une simple fonction mathématique qui reçoit
                des nombres en entrée, les multiplie par des "poids", ajoute un
                "biais", et applique une fonction d'activation pour produire une
                sortie.
              </p>
              <p>
                L'apprentissage se fait par un processus appelé{' '}
                <strong>rétropropagation du gradient</strong>. Quand le réseau
                fait une prédiction incorrecte, on calcule l'erreur et on la
                "propage" en arrière à travers le réseau. Chaque poids est alors
                légèrement ajusté pour réduire cette erreur. Répété des millions
                de fois sur des milliers d'exemples, ce processus permet au
                réseau d'apprendre des patterns de plus en plus complexes.
              </p>

              <h3>Les différents types d'apprentissage</h3>
              <p>
                L'<strong>apprentissage supervisé</strong> est le plus courant.
                On donne à l'IA des exemples avec leurs réponses correctes (des
                images de chats étiquetées "chat"). C'est comme un professeur
                qui corrige les devoirs. Les algorithmes comme les réseaux de
                neurones convolutifs (CNN) excellent dans la reconnaissance
                d'images grâce à leur capacité à détecter des motifs visuels
                hiérarchiques : d'abord des lignes et des formes simples, puis
                des textures, et enfin des objets complets.
              </p>
              <p>
                L'<strong>apprentissage non supervisé</strong> est plus subtil.
                L'IA doit trouver des structures cachées dans les données sans
                qu'on lui dise quoi chercher. Les autoencodeurs, par exemple,
                apprennent à compresser puis reconstruire des données,
                découvrant ainsi leurs caractéristiques essentielles. Les
                algorithmes de clustering comme K-means regroupent
                automatiquement des données similaires.
              </p>
              <p>
                L'<strong>apprentissage par renforcement</strong> est fascinant
                : l'IA apprend par essai-erreur en recevant des récompenses ou
                des punitions. C'est ainsi qu'AlphaGo a appris à jouer au Go en
                jouant des millions de parties contre elle-même, ou que des
                robots apprennent à marcher en étant "récompensés" quand ils
                avancent sans tomber.
              </p>

              <h3>
                La révolution des Transformers et des Large Language Models
              </h3>
              <p>
                En 2017, l'architecture <strong>Transformer</strong> a
                révolutionné l'IA. Sa grande innovation ? Le mécanisme d'
                <strong>attention</strong>, qui permet au modèle de comprendre
                les relations entre tous les mots d'une phrase simultanément,
                plutôt que de les traiter séquentiellement. Imaginez que vous
                lisez une phrase : votre cerveau ne lit pas mot par mot de façon
                isolée, mais comprend comment chaque mot se rapporte aux autres.
                Les Transformers font pareil !
              </p>
              <p>
                Les <strong>Large Language Models (LLMs)</strong> comme GPT,
                Claude ou LLaMA sont des Transformers entraînés sur d'énormes
                quantités de texte. Ils ont appris à prédire le mot suivant dans
                une phrase, mais ce faisant, ils ont développé une compréhension
                remarquable du langage, du contexte, et même du raisonnement.
                Avec des milliards de paramètres (les poids du réseau), ils
                peuvent générer du texte cohérent, répondre à des questions,
                traduire, programmer, et bien plus.
              </p>

              <h3>Les défis techniques actuels</h3>
              <p>
                L'<strong>explicabilité</strong> reste un défi majeur. Les
                réseaux de neurones profonds sont souvent des "boîtes noires" :
                on sait qu'ils fonctionnent, mais comprendre exactement pourquoi
                ils prennent une décision spécifique est difficile. Des
                techniques comme LIME ou SHAP tentent d'expliquer les
                prédictions, mais c'est encore un domaine de recherche actif.
              </p>
              <p>
                La <strong>généralisation</strong> est un autre défi. Une IA
                entraînée sur certaines données peut mal performer sur des
                données légèrement différentes. C'est pourquoi une IA de
                reconnaissance faciale entraînée principalement sur des visages
                européens peut avoir des difficultés avec d'autres ethnicités.
                L'augmentation de données et les techniques de régularisation
                aident, mais le problème persiste.
              </p>
              <p>
                L'<strong>efficacité énergétique</strong> devient cruciale.
                Entraîner un grand modèle peut consommer autant d'électricité
                qu'une petite ville pendant plusieurs jours. Les chercheurs
                explorent des architectures plus efficaces, la quantification
                (réduire la précision des calculs), et l'apprentissage par
                transfert (réutiliser des modèles pré-entraînés).
              </p>

              <h3>Vers le futur : AGI et au-delà</h3>
              <p>
                L'<strong>Intelligence Artificielle Générale (AGI)</strong> -
                une IA aussi polyvalente qu'un humain - reste un objectif
                lointain. Les IA actuelles sont des "IA étroites" : excellentes
                dans des domaines spécifiques mais incapables de généraliser
                comme nous. Une IA qui bat le champion du monde d'échecs ne sait
                pas faire cuire un œuf !
              </p>
              <p>
                Les approches prometteuses incluent l'apprentissage multi-modal
                (combiner vision, langage, son), l'apprentissage continu
                (apprendre de nouvelles tâches sans oublier les anciennes), et
                peut-être des architectures complètement nouvelles inspirées par
                les neurosciences. Certains pensent que l'AGI arrivera dans
                10-20 ans, d'autres pensent qu'il faudra un siècle. Une chose
                est sûre : le voyage sera passionnant !
              </p>
            </div>
          </div>
        </section>

        <ExplanationSection explanation={explanationContent} />

        <BackHomePortal />
      </div>
    </PageLayout>
  );
};
