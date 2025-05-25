'use client'
import { WineEvent } from '@/types/wineEvent';

export default function EventList({ events }: { events: WineEvent[] }) {
  //TODO : refactor en truc stylé
  if (events.length === 0) return <p>Aucun événement pour le moment.</p>

  return (
    <ul className="space-y-2">
      {events.map((event) => (
        <li key={event.id} className="border p-2 rounded shadow-sm">
          <strong>{event.title}</strong> – {new Date(event.date).toLocaleDateString()} à {event.location}
        </li>
      ))}
    </ul>
  )
}
