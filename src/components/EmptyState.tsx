type EmptyStateProps = {
  message: string;
};

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="text-center text-gray-400">
      <p>{message}</p>
    </div>
  );
}