'use client'

import { useEffect } from 'react';
import { useEvents } from './events.hooks'
import CreateEventForm from '@/app/events/components/CreateEventForm';
import EventList from './components/EventList'

export default function EventPage() {
  const { events, loadEvents, addEvent } = useEvents()

  useEffect(() => {
    loadEvents()
  }, [loadEvents])

  return (
    <div className="space-y-4">
      <CreateEventForm onSubmit={addEvent} />
      <EventList events={events} />
    </div>
  )
}