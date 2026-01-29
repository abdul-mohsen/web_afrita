// components/Loading.js
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex items-center justify-center w-16 h-16 border-4 border-solid border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      <p className="mt-4 text-lg text-blue-600 font-bold">جارِ التحميل...</p>
    </div>
  );
}
