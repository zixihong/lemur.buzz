import Header from "@/components/Header"; // Assuming alias @ maps to src

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-light mb-6 text-gray-800">
          Simplicity Delivered.
        </h1>
        <p className="text-lg text-gray-500 mb-8 max-w-md">
          Focus on what matters. We handle the rest. Clean, simple, effective.
        </p>
        <button className="px-8 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-200">
          Get Started
        </button>
      </main>
      {/* Optional: Add a minimal footer later if needed */}
      {/* <footer className="py-4 text-center text-xs text-gray-400">
        © 2024 Your Company
      </footer> */}
    </div>
  );
}
