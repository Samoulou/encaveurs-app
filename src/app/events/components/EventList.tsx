import { WineEvent } from '@/types/wineEvent';
import Link from 'next/link';

export default function EventList({ events, isLoading}: { events: WineEvent[], isLoading : boolean }) {

  if (!events || events.length === 0) {
      return (
        <div className="text-center text-gray-500 py-8">
          Aucun événement disponible pour le moment.
        </div>
    );
  }
  
  if (isLoading) {
    return (
      <div className="space-y-2" aria-busy="true">
        <div className="animate-pulse bg-gray-200 h-24 rounded-md" />
        <div className="animate-pulse bg-gray-200 h-24 rounded-md" />
      </div>
    );
  }

return (
    <div className="space-y-4" role="list" aria-label="Liste des événements">
      {events.map((event) => (
        <div
          key={event.id}
          role="listitem"
          className="border p-4 rounded-lg shadow-sm bg-white"
        >
          <div className="flex items-start gap-2">
            <div className="text-2xl" aria-hidden="true">📅</div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">
                {new Date(event.date).toLocaleString(undefined, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <p className="text-sm text-gray-700">{event.location}</p>

              {event.description && (
                <p className="text-sm text-gray-500 mt-2">
                  {event.description.slice(0, 100)}...
                </p>
              )}

              <Link
                href={`/events/${event.id}`}
                className="text-blue-600 underline mt-2 inline-block"
                aria-label={`Voir les détails de l'événement ${event.title}`}
              >
                Voir les détails
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* TODO : Ajouter pagination ou scroll infini ici */}
    </div>
  );
}