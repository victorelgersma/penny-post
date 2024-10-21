'use client'; // Ensures the component runs on the client side

import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


  // Simulating login credentials
  const validEmail = 'test@example.com';
  const validPassword = '123456789';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>(validEmail);
  const [password, setPassword] = useState<string>(validPassword);
  const [error, setError] = useState<string | null>(null);


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error before trying login

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers:  {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
      });

      if (res.ok) {
        router.push('/dashboard'); // Redirect to dashboard on successful login
      } else {
        const errorData = await res.json();
        setError(errorData.error || 'Login failed')
      }
    } catch (err) {
      setError('Something went wrong. Please try again. ');
    }
  };
  

  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl text-foreground font-semibold mb-6 text-center">Login</h1>
        Try logging in with {validEmail} and {validPassword}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-foreground font-medium text-black">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>

          {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
        </form>
      </div>
    </div>
   </>
  );
}

