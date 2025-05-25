'use client';

import { useState } from 'react';
import { WineEvent } from '../../../types/wineEvent';

export type CreateEventFormProps = {
  onSubmit: (newEvent: WineEvent) => Promise<void>;
};

export default function CreateEventForm({ onSubmit }: CreateEventFormProps) {
  const [formData, setFormData] = useState<WineEvent>({
    title: '',
    location: '',
    date: new Date(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev: WineEvent) => ({
      ...prev,
      [name]: name === 'date' ? new Date(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.title || !formData.location || !formData.date) return;

    await onSubmit(formData);

    setFormData({
      title: '',
      location: '',
      date: new Date(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-semibold">Créer un événement</h2>

      <div className="flex flex-col">
        <label htmlFor="title" className="mb-1 font-medium">Titre</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="location" className="mb-1 font-medium">Lieu</label>
        <input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="date" className="mb-1 font-medium">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date.toISOString().split('T')[0]} // Format YYYY-MM-DD
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Ajouter
      </button>
    </form>
  );
}
