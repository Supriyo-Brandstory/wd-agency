"use client"
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch('/api/admin/logout');
    if (response.ok) {
      router.push('/admin');
    } else {
      alert('Logout failed');
    }
  };

  return (
    
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-700">Welcome to the admin dashboard!</p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
  );
};

export default Dashboard;
