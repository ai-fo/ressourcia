import { PageLayout } from '../components/layout/PageLayout';
import { StorySection } from '../features/storytelling/StorySection';
import { InteractiveSection } from '../features/interactive/InteractiveSection';
import { ExplanationSection } from '../features/explanations/ExplanationSection';
import { Page } from '../types';

const machineLearningPage: Page = {
  id: 'ml-basics',
  slug: 'machine-learning-basics',
  title: 'Les bases du Machine Learning',
  description: 'Découvrez le machine learning de façon ludique',
  story: {
    id: 'ml-story',
    title: 'Le Jardinier et ses Tomates',
    content: `Il était une fois un jardinier nommé Marcel qui cultivait des tomates depuis 30 ans. 
    Au fil du temps, il avait remarqué des patterns : les tomates plantées près du basilic 
    semblaient plus savoureuses, celles arrosées le matin poussaient mieux, et la couleur 
    des feuilles prédisait souvent la qualité de la récolte. Un jour, sa petite-fille 
    informaticienne lui dit : "Grand-père, tu fais du machine learning sans le savoir ! 
    Tu as collecté des données pendant des années, identifié des patterns, et maintenant 
    tu peux prédire le résultat de tes récoltes !" C'est exactement ce que fait le 
    machine learning : apprendre des patterns à partir de données pour faire des prédictions.`,
    fact: {
      title: 'Le saviez-vous ?',
      description: `Le terme "Machine Learning" a été inventé par Arthur Samuel en 1959. 
      Il a créé un programme qui jouait aux dames et qui s'améliorait en jouant contre 
      lui-même - exactement comme Marcel qui s'améliore chaque année !`,
      source: 'IBM Research, 1959',
    },
  },
  interactive: {
    id: 'ml-interactive',
    type: 'simulation',
    title: 'Entraînez votre propre IA jardinière',
    description:
      "Aidez l'IA à apprendre quelles tomates sont mûres en lui montrant des exemples",
    config: {
      type: 'classification',
      classes: ['Verte', 'Orange', 'Rouge'],
      features: ['couleur', 'taille', 'fermeté'],
    },
  },
  explanation: {
    id: 'ml-explanation',
    title: 'Comment fonctionne le Machine Learning ?',
    content: `Le machine learning est une branche de l'intelligence artificielle qui permet 
    aux ordinateurs d'apprendre à partir de données sans être explicitement programmés. 
    Comme Marcel qui a appris à cultiver ses tomates par l'expérience, les algorithmes 
    de ML identifient des patterns dans les données pour faire des prédictions.`,
    keyPoints: [
      "Les données sont essentielles : plus on a d'exemples, mieux l'IA apprend",
      "L'apprentissage se fait en identifiant des patterns répétitifs",
      "Une fois entraînée, l'IA peut faire des prédictions sur de nouvelles données",
      'Il existe différents types : classification, régression, clustering',
    ],
    examples: [
      {
        title: 'Classification',
        description:
          'Comme trier les tomates par couleur (verte, orange, rouge)',
        code: `// Exemple simplifié
const classifier = new TomatoClassifier();
classifier.train(trainingData);
const prediction = classifier.predict(newTomato);
// Résultat: "Rouge"`,
      },
      {
        title: 'Régression',
        description: "Prédire le poids d'une tomate selon sa taille",
        code: `// Prédiction continue
const model = new WeightPredictor();
model.train(sizeWeightData);
const weight = model.predict(size: 8cm);
// Résultat: 125g`,
      },
    ],
  },
  metadata: {
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['machine-learning', 'ia', 'débutant'],
    difficulty: 'beginner',
  },
};

export const MachineLearningExample = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <h1>{machineLearningPage.title}</h1>
        <StorySection story={machineLearningPage.story} />
        <InteractiveSection interactive={machineLearningPage.interactive}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>🍅 Simulation interactive à venir...</p>
            <p>
              Ici, vous pourrez entraîner une IA à reconnaître des tomates
              mûres!
            </p>
          </div>
        </InteractiveSection>
        <ExplanationSection explanation={machineLearningPage.explanation} />
      </div>
    </PageLayout>
  );
};
