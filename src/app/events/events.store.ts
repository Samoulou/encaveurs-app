import { create } from 'zustand'
import { WineEvent } from '../../types/wineEvent'

type EventStore = {
  events: WineEvent[]
  setEvents: (events: WineEvent[]) => void
}

export const useEventStore = create<EventStore>((set) => ({
  events: [],
  setEvents: (events) => set({ events }),
}))
