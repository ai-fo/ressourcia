import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Configuration de développement avec instructions
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'https://your-project.supabase.co') {
  console.warn(`
🚨 Configuration Supabase requise !

Pour utiliser l'authentification, tu dois :

1. Créer un compte sur https://supabase.com
2. Créer un nouveau projet "ressourcia"
3. Dans les paramètres du projet, récupérer :
   - L'URL du projet
   - La clé publique (anon key)
4. Modifier le fichier .env avec ces valeurs :
   VITE_SUPABASE_URL=ton_url_ici
   VITE_SUPABASE_ANON_KEY=ta_clé_ici
5. Redémarrer le serveur de développement

Pour l'instant, l'authentification est désactivée.
  `);
}

// Créer un client même avec des valeurs vides pour éviter les erreurs
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          full_name: string | null;
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};