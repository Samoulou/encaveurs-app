// src/app/events/[id]/page.tsx

import { fetchEventById } from '@/app/events/events.service'; // Adaptez le chemin si besoin
import { WineEvent } from '@/types/wineEvent';         // Adaptez le chemin si besoin
import { notFound } from 'next/navigation';
import Link from 'next/link';


interface Next15DynamicPageProps {
  params: Promise<{ id: string }>; // params est une Promesse qui résoudra en { id: string }
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; // searchParams aussi
}

export default async function EventDetailPage(
  { params: paramsPromise }: Next15DynamicPageProps
) {
  const params = await paramsPromise; // <-- LA SOLUTION : ATTENDRE la résolution de la promesse params
  const eventId = params.id;

  const event: WineEvent | null = await fetchEventById(eventId);

  if (!event) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-8">
        <div className="mb-6">
          <Link href="/events" className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm">
            &larr; Retour à la liste des événements
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{event.title}</h1>
        <div className="space-y-4 text-gray-700 mt-4">
          {/* Affichage de l'ID (optionnel) */}
          {/* <div className="flex items-start">
            <span className="font-semibold mr-2 w-20 shrink-0">ID :</span>
            <span className="flex-1">{event.id}</span>
          </div> */}
          <div className="flex items-start">
            <span className="font-semibold mr-2 w-20 shrink-0">Date :</span>
            <span className="flex-1">{new Date(event.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold mr-2 w-20 shrink-0">Lieu :</span>
            <span className="flex-1">{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}