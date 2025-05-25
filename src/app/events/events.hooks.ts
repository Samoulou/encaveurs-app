import { useEventStore } from './events.store'
import { fetchEvents, createEvent } from './events.service'
import { useCallback } from 'react'

export function useEvents() {
  const events = useEventStore((state) => state.events)
  const setEvents = useEventStore((state) => state.setEvents)

  const loadEvents = useCallback(async () => {
    const data = await fetchEvents()
    setEvents(data)
  }, [setEvents])

  const addEvent = useCallback(
    async (newEvent: Parameters<typeof createEvent>[0]) => {
      await createEvent(newEvent)
      await loadEvents()
    },
    [loadEvents]
  )

  return {
    events,
    loadEvents,
    addEvent,
  }
}
