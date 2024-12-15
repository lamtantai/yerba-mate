export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-black border-t-gray"></div>
    </div>
  );
}
