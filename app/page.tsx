import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-indigo-600 p-4">
        <div className="container mx-auto flex justify-between">
          {/* Logo or Home link */}
          <Link href="/" className="text-white text-xl font-bold">
  Penny Post
          </Link>

          {/* Links */}
          <div className="flex space-x-4">
            <Link href="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
          <h1 className="text-3xl font-semibold mb-4">Penny Post</h1>
          <p className="text-lg">
            This is the home page. You can log in to access your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

