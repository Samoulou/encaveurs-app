'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <Link href="/" className="text-xl font-bold text-gray-800">🍇 Encaveurs</Link>
      <nav className="space-x-4">
        <Link href="/events" className="text-gray-700 hover:text-blue-600">Événements</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">À propos</Link>
      </nav>
    </header>
  )
}
