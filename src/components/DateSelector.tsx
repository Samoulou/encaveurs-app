type DateSelectorProps = {
  availableDates: string[];
};

export default function DateSelector({ availableDates }: DateSelectorProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-md font-medium">Choisissez une date</h4>
      <div className="flex gap-2 overflow-x-auto">
        {availableDates.map(date => (
          <button
            key={date}
            className="border px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition whitespace-nowrap"
          >
            {new Date(date).toLocaleDateString('fr-FR')}
          </button>
        ))}
      </div>
    </div>
  );
}