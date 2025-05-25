'use client'

import { WineEvent } from '@/types/wineEvent'
import Link from 'next/link'

type Props = {
  event: WineEvent
}

export default function EventCard({ event }: Props) {
  return (
    <div className="border rounded-xl shadow-sm hover:shadow-md transition-all bg-white p-4">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-500">{event.location}</p>
      <p className="text-sm text-gray-400">{new Date(event.date).toLocaleDateString()}</p>
      <Link
        href={`/events/${event.id}`}
        className="inline-block mt-3 text-blue-600 hover:underline text-sm"
      >
        Voir les détails →
      </Link>
    </div>
  )
}
