'use client';

import Navbar from '../components/Navbar';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>(''); // New state for password confirmation
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error before trying registration

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, passwordConfirm, name }),
      });

      if (res.ok) {
        // Redirect to login page after successful registration
        router.push('/login');
      } else {
        const errorData = await res.json();
        setError(errorData.error || 'Registration failed');
      }
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.');
    }
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setter(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl text-foreground font-semibold mb-6 text-center">Register</h1>
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-foreground font-medium text-black">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={handleInputChange(setName)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-foreground font-medium text-black">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange(setEmail)}
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
                onChange={handleInputChange(setPassword)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="passwordConfirm"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={handleInputChange(setPasswordConfirm)} // Update password confirmation field
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>

            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
