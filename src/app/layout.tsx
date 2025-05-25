import "../styles/globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
