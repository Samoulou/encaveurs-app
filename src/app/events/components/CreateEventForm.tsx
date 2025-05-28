'use client';

import { useState } from 'react';
import { WineEvent } from '@/types/wineEvent';
import { EventStatus } from '@/types/wineEventsType';

export type CreateEventFormProps = {
  onSubmit: (newEvent: WineEvent) => Promise<void>;
};

export default function CreateEventForm({ onSubmit }: CreateEventFormProps) {
  const [formData, setFormData] = useState<WineEvent>({
    title: '',
    location: '',
    date: new Date(),
    description: '',
    price: 0,
    category: EventStatus.DEGUSTATION,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

setFormData((prev: WineEvent) => ({
    ...prev,
    [name]: name === 'date'
      ? new Date(value)
      : name === 'price'
      ? parseFloat(value)
      : value,
  }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!formData.title || !formData.location || !formData.date) {
      setErrorMessage('Tous les champs obligatoires doivent être remplis.');
      return;
    }

    if (formData.date < new Date()) {
      setErrorMessage('La date doit être dans le futur.');
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      setSuccessMessage('Événement créé avec succès !');
      setFormData({
        title: '',
        location: '',
        date: new Date(),
        description: '',
        price: 0,
        category: EventStatus.DEGUSTATION
      });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrorMessage("Erreur lors de l'envoi de l'événement.");
    } finally {
      setIsSubmitting(false);
    }
  };
    

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-xl shadow-md bg-white" aria-label="Créer un événement">
      <h2 className="text-xl font-semibold">Créer un événement</h2>

      {/* Titre */}
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
          aria-required="true"
        />
      </div>

      {/* Lieu */}
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
          aria-required="true"
        />
      </div>

      {/* Date */}
      <div className="flex flex-col">
        <label htmlFor="date" className="mb-1 font-medium">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date.toISOString().split('T')[0]}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
          aria-required="true"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-1 font-medium">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded-md"
          rows={3}
        />
      </div>

      {/* Prix */}
      <div className="flex flex-col">
        <label htmlFor="price" className="mb-1 font-medium">Prix (CHF)</label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.05"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded-md"
        />
      </div>

      {/* Catégorie */}
      <div className="flex flex-col">
        <label htmlFor="category" className="mb-1 font-medium">Catégorie</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded-md"
        >
          <option value="Dégustation">Dégustation</option>
          <option value="Visite">Visite</option>
          <option value="Portes ouvertes">Portes ouvertes</option>
        </select>
      </div>

      {/* Bouton + loader */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Ajouter'}
      </button>

      {/* Messages */}
      {errorMessage && <p className="text-red-600 font-medium">{errorMessage}</p>}
      {successMessage && <p className="text-green-600 font-medium">{successMessage}</p>}
    </form>
  );
}
