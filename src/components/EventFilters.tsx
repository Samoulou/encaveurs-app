'use client'

import { ChangeEvent } from 'react'

type Props = {
  region: string
  setRegion: (value: string) => void
  date: string
  setDate: (value: string) => void
}

export default function EventFilters({ region, setRegion, date, setDate }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4 bg-white p-4 rounded-xl shadow-md">
      <div className="flex flex-col">
        <label htmlFor="region" className="text-sm font-medium text-gray-700 mb-1">
          Région
        </label>
        <select
          id="region"
          name="region"
          value={region}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setRegion(e.target.value)}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Toutes les régions</option>
          <option value="Valais">Valais</option>
          <option value="Vaud">Vaud</option>
          <option value="Genève">Genève</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  )
}
