// app/events/page.tsx
'use client'

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('wineevents').select('*');
      if (error) {
        console.error('Erreur de chargement:', error.message);
      } else {
        setEvents(data);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des événements</h1>
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event.id} className="border rounded p-2">
            <strong>{event.title}</strong> – {event.date} à {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
