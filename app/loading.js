export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-black border-t-gray"></div>
    </div>
  );
}
