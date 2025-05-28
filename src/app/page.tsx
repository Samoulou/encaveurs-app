'use client';

import { useEffect, useState, useMemo } from 'react'
import EventList from './events/components/EventList'
import EventFilters from '../components/EventFilters'
import { useEvents } from '../hooks/events.hooks'

export default function HomePage() {
  const { events, loadEvents } = useEvents();

  const [region, setRegion] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const initialLoad = async () => {
      setLoading(true);
      try {
        await loadEvents();
      } catch (error) {
        console.error("Failed to load events:", error);
      } finally {
        setLoading(false);
      }
    };
    initialLoad();
  }, [loadEvents]);

  const filteredEvents = useMemo(() => {
    let tempEvents = [...events];

    if (region) {
      tempEvents = tempEvents.filter(event =>
        event.location.toLowerCase().includes(region.toLowerCase())
      );
    }

    if (date) {
      tempEvents = tempEvents.filter(event => {
        const eventDate = new Date(event.date).toISOString().split('T')[0];
        return eventDate === date;
      });
    }
    return tempEvents;
  }, [events, region, date]);

  return (
    <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold">Trouvez votre événement viticole</h1>

      <EventFilters
        region={region}
        setRegion={setRegion}
        date={date}
        setDate={setDate}
      />

  <EventList events={filteredEvents} isLoading={loading} />
    </main>
  );
}
