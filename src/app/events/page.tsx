'use client'

import { useEffect, useState } from 'react';
import { useEvents } from '@/hooks/events.hooks'
import CreateEventForm from '@/app/events/components/CreateEventForm';
import EventList from './components/EventList'

export default function EventPage() {
  const { events, loadEvents, addEvent } = useEvents()
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
      await loadEvents()
      } catch (error) {
      console.error("Failed to load events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [loadEvents])

  return (
    <div className="space-y-4">
      <CreateEventForm onSubmit={addEvent} />
      <EventList events={events} isLoading={loading} />
    </div>
  )
}