import { create } from 'zustand'
import { WineEvent } from '@/types/wineEvent'

interface EventStore {
  events: WineEvent[];
  isLoading: boolean;
  error: string | null;
  setEvents: (events: WineEvent[]) => void;
  setIsLoading: (value: boolean) => void;
  setError: (message: string | null) => void;
}
export const useEventStore = create<EventStore>((set) => ({
  events: [],
  isLoading: false,
  error: '',
  setEvents: (events) => set({ events }),
  setIsLoading: (value) => set({ isLoading: value }),
  setError: (msg) => set({ error: msg }),
}))
