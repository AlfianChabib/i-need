export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="animate-pulse flex flex-col space-x-4 py-8 sm:space-x-10 sm:space-y-0 sm:flex-row sm:items-center sm:justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      </div>
    </div>
  );
}
