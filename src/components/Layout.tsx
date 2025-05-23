// components/Layout.tsx
import React from 'react';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
};

//TODO : extract header and footer
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Encaveurs</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Accueil</Link>
            <Link href="/events" className="text-gray-600 hover:text-gray-900">Événements</Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} Encaveurs. Tous droits réservés.
      </footer>
    </div>
  );
}