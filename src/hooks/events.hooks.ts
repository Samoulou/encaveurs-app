import { useEventStore } from '@/stores/events.store';
import { fetchEvents, createEvent } from '@/api/events.service';
import { useCallback, useEffect } from 'react';

export function useEvents(autoLoad = false) {
  const events = useEventStore((state) => state.events);
  const setEvents = useEventStore((state) => state.setEvents);
  const isLoading = useEventStore((state) => state.isLoading);
  const setIsLoading = useEventStore((state) => state.setIsLoading);
  const setError = useEventStore((state) => state.setError);

  const loadEvents = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchEvents();
      setEvents(data);
    } catch (error) {
      console.error('Erreur lors du chargement des événements:', error);
      setError('Impossible de charger les événements.');
    } finally {
      setIsLoading(false);
    }
  }, [setEvents, setIsLoading, setError]);

  const addEvent = useCallback(
    async (newEvent: Parameters<typeof createEvent>[0]) => {
      try {
        setIsLoading(true);
        await createEvent(newEvent);
        await loadEvents();
      } catch (error) {
        console.error("Erreur lors de l'ajout d'un événement:", error);
        setError("Impossible d'ajouter l'événement.");
      } finally {
        setIsLoading(false);
      }
    },
    [loadEvents, setIsLoading, setError]
  );

  useEffect(() => {
    if (autoLoad) {
      loadEvents();
    }
  }, [autoLoad, loadEvents]);

  return {
    events,
    isLoading,
    loadEvents,
    addEvent,
  };
}
