// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Bienvenue</h1>
      <Link href="/events" className="text-blue-600 underline">
        Voir les événements
      </Link>
    </main>
  );
}
