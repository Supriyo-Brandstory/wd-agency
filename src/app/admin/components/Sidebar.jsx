import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white flex flex-col shadow-xl">
      <div className="p-6 border-b border-indigo-700 flex items-center">
        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">WD</span>
        </div>
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <a 
          href="/admin/dashboard" 
          className="flex items-center py-3 px-4 rounded-lg text-base font-medium bg-indigo-700 text-white shadow-inner hover:bg-indigo-600 transition-all duration-200 transform hover:scale-[1.02]"
        >
          <span className="w-5 h-5 bg-white bg-opacity-20 rounded mr-3 flex items-center justify-center">
            📊 
          </span>
          Dashboard
        </a>
        <a 
          href="/admin/users" 
          className="flex items-center py-3 px-4 rounded-lg text-base font-medium text-indigo-200 hover:bg-indigo-700 hover:text-white transition-all duration-200"
        >
          <span className="w-5 h-5 bg-transparent rounded mr-3 flex items-center justify-center">
            👥
          </span>
          Users
        </a>
        <a 
          href="/admin/settings" 
          className="flex items-center py-3 px-4 rounded-lg text-base font-medium text-indigo-200 hover:bg-indigo-700 hover:text-white transition-all duration-200"
        >
          <span className="w-5 h-5 bg-transparent rounded mr-3 flex items-center justify-center">
            ⚙️
          </span>
          Settings
        </a>
      </nav>
      <div className="p-4 border-t border-indigo-700">
        <a 
          href="/admin/logout" 
          className="flex items-center py-2 px-4 rounded-lg text-sm font-medium text-indigo-200 hover:bg-indigo-700 hover:text-white transition-all duration-200"
        >
          <span className="w-4 h-4 bg-transparent rounded mr-3 flex items-center justify-center">
            🚪
          </span>
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;