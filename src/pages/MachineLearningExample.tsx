import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { StorySection } from '../features/storytelling/StorySection';
import { InteractiveSection } from '../features/interactive/InteractiveSection';
import { ExplanationSection } from '../features/explanations/ExplanationSection';
import { BackHomePortal } from '../components/ui/BackHomePortal';
import { useAuth } from '../contexts/AuthContext';
import { useGamification } from '../contexts/GamificationContext';
import { ConceptPageTemplate } from './ConceptPageTemplate';
import './MachineLearningPage.css';

export const MachineLearningExample = () => {
  const { slug } = useParams();
  const [trainingData, setTrainingData] = useState<
    { height: number; weight: number; sport: string }[]
  >([]);
  const [userPrediction, setUserPrediction] = useState<string>('');
  const [modelPrediction, setModelPrediction] = useState<string>('');
  const [gameScore, setGameScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [hasCompletedGame, setHasCompletedGame] = useState(false);

  const { user } = useAuth();
  const { completeActivity } = useGamification();

  // Check if game is already completed
  useEffect(() => {
    const checkGameStatus = async () => {
      if (user) {
        // Game completion status check
        setHasCompletedGame(false);
      }
    };
    checkGameStatus();
  }, [user]);

  const storyContent = {
    title: "L'histoire de Marie et son chien détective",
    content: `Marie adorait les chiens, mais elle avait un problème : elle n'arrivait jamais à deviner quelle race de chien elle croisait dans la rue. Berger allemand ? Labrador ? Golden retriever ? Impossible de s'y retrouver !

Un jour, elle eut une idée géniale : "Et si j'apprenais à un ordinateur à reconnaître les races de chiens pour moi ?"

Elle commença par montrer à son ordinateur des milliers de photos de chiens, en lui disant à chaque fois : "Ça, c'est un labrador", "Ça, c'est un beagle", "Et ça, un husky".

Au début, l'ordinateur était nul. Il pensait qu'un chihuahua était un saint-bernard ! Mais Marie persévéra. Plus elle lui montrait d'exemples, plus il devenait précis.

Après des semaines d'entraînement, le miracle se produisit. Marie croisa un chien dans la rue, prit une photo, et son ordinateur déclara : "Cocker anglais, probabilité 94%". Le propriétaire confirma : c'était exact !

"Tu vois," dit Marie à son ordinateur, "tu as appris tout seul, juste en observant des exemples. C'est ça, le machine learning !"`,
    fact: {
      title: '🧠 Le saviez-vous ?',
      description: `Le terme "Machine Learning" a été inventé en 1959 par Arthur Samuel, un pionnier de l'IA chez IBM. Il a créé un programme qui jouait aux dames et qui s'améliorait en jouant contre lui-même. Après des milliers de parties, le programme est devenu si bon qu'il a battu son créateur !`,
    },
  };

  const explanationContent = {
    title: 'Comment fonctionne le Machine Learning ?',
    sections: [
      {
        subtitle: "📊 Les données : le carburant de l'apprentissage",
        content: `Le machine learning commence toujours par des données. Comme Marie qui montrait des photos de chiens à son ordinateur, nous devons fournir des exemples à notre modèle. Plus nous avons d'exemples variés et de qualité, mieux le modèle apprendra.`,
      },
      {
        subtitle: "🎯 L'entraînement : apprendre des patterns",
        content: `Pendant l'entraînement, l'algorithme cherche des patterns dans les données. Par exemple, il pourrait remarquer que les labradors ont souvent des oreilles tombantes et un pelage court, tandis que les huskies ont des oreilles pointues et un pelage épais.`,
      },
      {
        subtitle: "🔮 La prédiction : utiliser ce qu'on a appris",
        content: `Une fois entraîné, le modèle peut faire des prédictions sur de nouvelles données qu'il n'a jamais vues. C'est comme si Marie pouvait maintenant reconnaître des races de chiens même dans des positions ou des éclairages différents.`,
      },
      {
        subtitle: "📈 L'amélioration continue",
        content: `Le machine learning n'est pas statique. On peut continuer à améliorer un modèle en lui donnant plus de données ou en ajustant ses paramètres. C'est un processus itératif d'apprentissage et d'amélioration.`,
      },
    ],
  };

  // Training data for the game
  const sampleData = [
    { height: 180, weight: 80, sport: 'Basketball' },
    { height: 185, weight: 85, sport: 'Basketball' },
    { height: 175, weight: 75, sport: 'Basketball' },
    { height: 160, weight: 55, sport: 'Gymnastique' },
    { height: 165, weight: 50, sport: 'Gymnastique' },
    { height: 155, weight: 48, sport: 'Gymnastique' },
    { height: 170, weight: 90, sport: 'Rugby' },
    { height: 175, weight: 95, sport: 'Rugby' },
    { height: 180, weight: 100, sport: 'Rugby' },
  ];

  const trainModel = () => {
    setTrainingData(sampleData);
    setGameScore(gameScore + 10);
  };

  const makePrediction = (height: number, weight: number) => {
    if (trainingData.length === 0) return;

    // Simple prediction based on distance to training examples
    let minDistance = Infinity;
    let predictedSport = '';

    trainingData.forEach((data) => {
      const distance = Math.sqrt(
        Math.pow(height - data.height, 2) + Math.pow(weight - data.weight, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        predictedSport = data.sport;
      }
    });

    setModelPrediction(predictedSport);

    if (predictedSport === userPrediction) {
      setGameScore(gameScore + 20);
      if (!gameCompleted) {
        setGameCompleted(true);
        handleGameCompletion();
      }
    }
  };

  const handleGameCompletion = async () => {
    if (user && !hasCompletedGame) {
      const success = await completeActivity(
        'machine-learning-trainer',
        'game',
        100,
        50,
        'Mini-jeu Machine Learning Trainer complété'
      );
      if (success) {
        setHasCompletedGame(true);
      }
    }
  };


  // Si ce n'est pas la page machine-learning-basics, afficher le template
  if (slug !== 'machine-learning-basics') {
    return <ConceptPageTemplate />;
  }

  return (
    <PageLayout>
      <div className="machine-learning-page">
        <div className="liquid-background">
          <div className="liquid-blob liquid-blob-1"></div>
          <div className="liquid-blob liquid-blob-2"></div>
          <div className="liquid-blob liquid-blob-3"></div>
        </div>

        <header className="page-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="page-title">
                <span className="title-gradient">Machine Learning</span>
              </h1>
              <p className="page-subtitle">
                Découvre comment les machines apprennent par l'expérience
              </p>
            </div>
            <div className="hero-image-container">
              <img
                src="/images/concepts/machinelearning.png"
                alt="Machine Learning"
                className="hero-image"
              />
              <div className="image-liquid-effect"></div>
            </div>
          </div>
        </header>

        <StorySection story={storyContent} />

        <InteractiveSection title="🏋️ Entraîne ton propre modèle ML">
          <div className="ml-trainer-game">
            <h3>Prédis le sport en fonction de la taille et du poids !</h3>

            <div className="game-steps">
              <div
                className={`step ${trainingData.length > 0 ? 'completed' : 'active'}`}
              >
                <h4>Étape 1: Entraîne ton modèle</h4>
                <p>Clique pour charger les données d'entraînement</p>
                <button
                  onClick={trainModel}
                  disabled={trainingData.length > 0}
                  className="train-button"
                >
                  {trainingData.length > 0
                    ? '✓ Modèle entraîné'
                    : 'Entraîner le modèle'}
                </button>
              </div>

              {trainingData.length > 0 && (
                <div className="training-data-viz">
                  <h4>Données d'entraînement</h4>
                  <div className="data-grid">
                    {sampleData.map((data, index) => (
                      <div
                        key={index}
                        className={`data-point ${data.sport.toLowerCase()}`}
                      >
                        <span className="sport-emoji">
                          {data.sport === 'Basketball'
                            ? '🏀'
                            : data.sport === 'Gymnastique'
                              ? '🤸'
                              : '🏉'}
                        </span>
                        <span>
                          {data.height}cm, {data.weight}kg
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {trainingData.length > 0 && (
                <div
                  className={`step ${gameCompleted ? 'completed' : 'active'}`}
                >
                  <h4>Étape 2: Teste ton modèle</h4>
                  <div className="prediction-test">
                    <p>Nouvelle personne : 172cm, 70kg</p>
                    <p>À ton avis, quel sport pratique-t-elle ?</p>
                    <div className="sport-options">
                      <button
                        onClick={() => setUserPrediction('Basketball')}
                        className={
                          userPrediction === 'Basketball' ? 'selected' : ''
                        }
                      >
                        🏀 Basketball
                      </button>
                      <button
                        onClick={() => setUserPrediction('Gymnastique')}
                        className={
                          userPrediction === 'Gymnastique' ? 'selected' : ''
                        }
                      >
                        🤸 Gymnastique
                      </button>
                      <button
                        onClick={() => setUserPrediction('Rugby')}
                        className={userPrediction === 'Rugby' ? 'selected' : ''}
                      >
                        🏉 Rugby
                      </button>
                    </div>
                    {userPrediction && (
                      <button
                        onClick={() => makePrediction(172, 70)}
                        className="predict-button"
                      >
                        Voir la prédiction du modèle
                      </button>
                    )}
                    {modelPrediction && (
                      <div className="prediction-result">
                        <p>
                          Prédiction du modèle :{' '}
                          <strong>{modelPrediction}</strong>
                        </p>
                        {modelPrediction === userPrediction ? (
                          <p className="success">
                            🎉 Bravo ! Tu as compris comment le modèle pense !
                          </p>
                        ) : (
                          <p className="hint">
                            🤔 Le modèle a choisi différemment. Il se base sur
                            la distance avec les exemples d'entraînement.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {gameCompleted && (
              <div className="game-completion">
                <h3>🏆 Félicitations !</h3>
                <p>Tu as compris le principe du Machine Learning !</p>
                {hasCompletedGame && (
                  <p className="bonus-info">Points bonus déjà obtenus</p>
                )}
              </div>
            )}
          </div>
        </InteractiveSection>

        <ExplanationSection explanation={explanationContent} />


        <BackHomePortal />
      </div>
    </PageLayout>
  );
};
