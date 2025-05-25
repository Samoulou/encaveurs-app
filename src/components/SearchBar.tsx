export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 border rounded-full px-4 py-2 shadow-sm">
      <input
        type="text"
        placeholder="Rechercher par lieu, nom..."
        className="flex-1 outline-none bg-transparent"
      />
      <button className="bg-primary text-white px-4 py-1 rounded-full">Rechercher</button>
    </div>
  );
}