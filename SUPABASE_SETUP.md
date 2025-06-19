# Configuration de Supabase pour Ressourcia 🔐

## 1. Créer un compte Supabase

1. Va sur [https://supabase.com](https://supabase.com)
2. Clique sur "Start your project"
3. Connecte-toi avec GitHub

## 2. Créer un nouveau projet

1. Clique sur "New project"
2. Nom du projet : `ressourcia`
3. Mot de passe de la base de données : (note-le bien !)
4. Région : Choisis la plus proche de toi
5. Clique sur "Create new project"

## 3. Récupérer les clés API

Une fois le projet créé :

1. Va dans "Settings" > "API"
2. Copie ces deux valeurs :
   - **Project URL** : `https://xxxxx.supabase.co`
   - **anon public** : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## 4. Configurer le fichier .env

Modifie le fichier `.env` à la racine du projet :

```env
VITE_SUPABASE_URL=https://ton-projet.supabase.co
VITE_SUPABASE_ANON_KEY=ta-cle-anon-ici
```

## 5. Créer la table des profils

Dans Supabase :

1. Va dans "SQL Editor"
2. Clique sur "New query"
3. Colle ce code SQL :

```sql
-- Créer la table profiles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Activer Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Politique pour que les utilisateurs puissent voir tous les profils
CREATE POLICY "Les profils sont visibles publiquement" ON profiles
  FOR SELECT USING (true);

-- Politique pour que les utilisateurs puissent modifier leur propre profil
CREATE POLICY "Les utilisateurs peuvent modifier leur propre profil" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Fonction pour créer automatiquement un profil lors de l'inscription
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (new.id, new.raw_user_meta_data->>'username');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger pour créer automatiquement le profil
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
```

4. Clique sur "Run"

## 6. Activer l'authentification par email

1. Va dans "Authentication" > "Providers"
2. Active "Email" si ce n'est pas déjà fait
3. Désactive "Confirm email" pour le développement

## 7. Redémarrer le serveur

```bash
npm run dev
```

Et voilà ! L'authentification est maintenant configurée 🎉

## Tester l'authentification

1. Va sur la page d'accueil
2. Clique sur "S'inscrire"
3. Crée un compte
4. Tu seras automatiquement connecté et redirigé vers ton profil

## En cas de problème

- Vérifie que les clés dans `.env` sont correctes
- Vérifie dans la console du navigateur pour des messages d'erreur
- Assure-toi que la table `profiles` a bien été créée dans Supabase
- Vérifie que Row Level Security est activé