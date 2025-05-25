import { supabase } from '@/lib/supabase'
import { WineEvent } from '../../types/wineEvent'

export async function fetchEvents(): Promise<WineEvent[]> {
  const { data, error } = await supabase.from('wineevents').select('*')
  if (error) throw new Error(error.message)

  return data.map((e) => ({
    title: e.title,
    location: e.location,
    date: new Date(e.date),
  }))
}

export async function createEvent(event: WineEvent) {
  const { error } = await supabase.from('wineevents').insert([event])
  if (error) throw new Error(error.message)
}
