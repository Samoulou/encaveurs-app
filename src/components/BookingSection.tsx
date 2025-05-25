import { WineEvent } from "@/types/wineEvent";

type BookingSectionProps = {
  event: WineEvent;
};

export default function BookingSection({ event }: BookingSectionProps) {
  return (
    <div className="mt-6 border-t pt-4">
      <h4 className="font-semibold mb-2">Réserver pour : {event.title}</h4>
      <p className="text-sm text-gray-500 mb-2">Date : {new Date(event.date).toLocaleDateString()}</p>
      <button className="bg-primary text-white px-6 py-2 rounded-full">
        Réserver maintenant
      </button>
    </div>
  );
}