// components/EventForm.tsx
'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function CreateEventForm({onEventCreated}: {onEventCreated: () => void}) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('wineevents').insert([{ title, date, location }]);
    if (error) {
      alert('Erreur lors de la création');
      console.error(error);
    } else {
      alert('Événement créé');
      setTitle('');
      setDate('');
      setLocation('');
      onEventCreated()
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded mt-8">
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Lieu"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Ajouter l’événement
      </button>
    </form>
  );
}
