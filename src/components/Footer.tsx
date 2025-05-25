export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-700 px-4 py-6 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} WineEvents. Tous droits réservés.</p>
      </div>
    </footer>
  );
}