import { supabase } from '@/lib/supabase'
import { WineEvent } from '../types/wineEvent'

//TODO : move to utils/supabase.utils.ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleSupabaseError(error: any, context: string = 'Erreur Supabase') {
  if (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`[${context}]`, error);
    }
    throw new Error(error.message || 'Erreur inconnue');
  }
}

//TODO : move to utils/supabase.utils.ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function logDev(message: string, data?: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[DEV LOG] ${message}`, data ?? '');
  }
}

export async function fetchEvents(): Promise<WineEvent[]> {
  const { data, error } = await supabase.from('wineevents').select('*')
  handleSupabaseError(error, 'fetchEvents');

  return data ?
  data.map((e) => ({
    id: e.id,
    title: e.title,
    description: e.description,
    price: e.price,
    category: e.category,
    location: e.location,
    date: new Date(e.date),
  })) 
  : []
}

export async function fetchEventById(id: string): Promise<WineEvent | null> {
  logDev('fetchEventById called with id:', id);

  const { data, error } = await supabase
    .from('wineevents')
    .select('*')
    .eq('id', id)
    .single();

  if (error?.code === 'PGRST116') return null;
  handleSupabaseError(error, 'fetchEventById');

  if (!data) return null;

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    price: data.price,
    category: data.category,
    location: data.location,
    date: new Date(data.date),
    // Ajoutez d'autres champs si votre type WineEvent en a plus et qu'ils viennent de Supabase
  };
}

export async function createEvent(event: WineEvent) {
  const { error } = await supabase.from('wineevents').insert([event])
  handleSupabaseError(error, 'createEvent');
}
