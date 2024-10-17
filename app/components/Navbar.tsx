"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
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
          <Link href="/register" className="text-white hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}


