import { supabase } from '@/lib/supabase'
import { WineEvent } from '../../types/wineEvent'

export async function fetchEvents(): Promise<WineEvent[]> {
  const { data, error } = await supabase.from('wineevents').select('*')
  if (error) throw new Error(error.message)
  return data ?
  data.map((e) => ({
    id: e.id,
    title: e.title,
    location: e.location,
    date: new Date(e.date),
  })) : []
}

export async function fetchEventById(id: string): Promise<WineEvent | null> {
  console.log(id)
  const { data, error } = await supabase
    .from('wineevents')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null;
    }
    throw new Error(error.message);
  }

  if (!data) {
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    location: data.location,
    date: new Date(data.date),
    // Ajoutez d'autres champs si votre type WineEvent en a plus et qu'ils viennent de Supabase
  };
}

export async function createEvent(event: WineEvent) {
  const { error } = await supabase.from('wineevents').insert([event])
  if (error) throw new Error(error.message)
}
