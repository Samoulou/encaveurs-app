'use client'
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <main>
      <h1 className="text-3xl font-bold text-blue-600">Bienvenue</h1>
      <Link href="/events">
        Voir les événements
      </Link>
    </main>
    </Layout>
    
  );
}
