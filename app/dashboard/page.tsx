import Navbar from '../components/Navbar';


export default function DashboardPage() {
  return (
    <>
    
    <Navbar />

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-semibold mb-6 text-center">Welcome to Your Dashboard!</h1>
        <p className="text-lg text-center">You are now logged in and can access the dashboard.</p>

        {/* Add any additional dashboard content here */}
        <div className="mt-6">
          <p className="text-center">
            This is where you can start adding features such as displaying user data, managing settings, or navigating to other parts of the app.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}


