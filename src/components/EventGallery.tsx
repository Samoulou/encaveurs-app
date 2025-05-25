type EventGalleryProps = {
  images: string[];
};

export default function EventGallery({ images }: EventGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt="event" className="rounded-lg object-cover h-48 w-full" />
      ))}
    </div>
  );
}