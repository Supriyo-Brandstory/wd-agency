"use client"; // required for client-side hooks

import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname(); // get current route

  const links = [
    { href: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/admin/dashboard/seo", label: "SEO", icon: "⚙️" },
    { href: "/admin/dashboard/sitemap", label: "Sitemap", icon: "🌐" },
    { href: "/admin/dashboard/enquiry", label: "Enquiry", icon: "📧" },
    {
      href: "/admin/dashboard/blog-category",
      label: "Blog Categories",
      icon: "📚",
    },
    { href: "/admin/dashboard/blog", label: "Blogs", icon: "📝" },
    {
      href: "/admin/dashboard/template-category",
      label: "Template Categories",
      icon: "🏢",
    },
    { href: "/admin/dashboard/template", label: "Templates", icon: "💎" },
  ];

  const handleLogout = async () => {
    const response = await fetch("/api/admin/logout");
    if (response.ok) {
      router.push("/admin");
    } else {
      alert("Logout failed");
    }
  };
  const logoutLink = { href: "/api/admin/logout", label: "Logout", icon: "🚪" };

  return (
    <div className="w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white flex flex-col shadow-xl">
      <div className="p-6 border-b border-indigo-700 flex items-center">
        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">WD</span>
        </div>
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-indigo-700 text-white shadow-inner transform scale-[1.02]"
                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white"
              }`}
            >
              <span
                className={`w-5 h-5 mr-3 flex items-center justify-center ${isActive ? "bg-white bg-opacity-20 rounded" : ""}`}
              >
                {link.icon}
              </span>
              {link.label}
            </a>
          );
        })}
      </nav>

      <div className="p-4 border-t border-indigo-700">
        <a
          href={logoutLink.href}
          className="flex items-center py-2 px-4 rounded-lg text-sm font-medium text-indigo-200 hover:bg-indigo-700 hover:text-white transition-all duration-200"
        >
          <span className="w-4 h-4 bg-transparent rounded mr-3 flex items-center justify-center">
            {logoutLink.icon}
          </span>
          {logoutLink.label}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
