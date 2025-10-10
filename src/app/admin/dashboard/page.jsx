"use client"
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();



  return (
    
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-700">Welcome to the admin dashboard!</p>
      </div>
  );
};

export default Dashboard;
