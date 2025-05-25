import { WineEvent } from '@/types/wineEvent';
import Link from 'next/link';

export default function EventList({ events }: { events: WineEvent[] }) {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="border p-4 rounded-lg">
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p>{event.location}</p>
          <Link href={`/events/${event.id}`} className="text-blue-600 underline">
            Voir les détails
          </Link>
        </div>
      ))}
    </div>
  );
}
