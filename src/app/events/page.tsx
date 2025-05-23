'use client'

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import CreateEventForm from '@/components/CreateEventForm';
import EventList from './EventList'
import { wineEvent } from '@/types/wineEvent';

export default function EventPage() {
  const [events, setEvents] = useState<wineEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
        const { data, error } = await supabase.from('wineevents').select('*');
        if (error) {
          console.error('Erreur de chargement:', error.message);
        } else {
          setEvents(data);
        }
        setLoading(false);
      };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
 <div className="space-y-4">
      <CreateEventForm onEventCreated={fetchEvents} />
      <EventList events={events} />
    </div>
  );
}
