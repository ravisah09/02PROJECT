import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b bg-white shadow-sm px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              <span className="text-blue-600">Chari</span>
              <span className="text-green-600">tean</span>
            </h1>
            <p className="text-sm text-gray-500">
              <b>A Social Responsibility App</b>
            </p>
          </div>

          <ul className="hidden md:flex items-center gap-12 text-gray-700 font-medium">
            <li className="text-blue-500 border-b-2 border-blue-500 pb-1 cursor-pointer">Roles</li>
            <li className="cursor-pointer hover:text-blue-500">Programs</li>
            <li className="cursor-pointer hover:text-blue-500">Community</li>
            <li className="cursor-pointer hover:text-blue-500">FAQs</li>
          </ul>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <button className="px-5 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition">
                Login
              </button>
            </Link>
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} className="text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

    
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="p-4 space-y-2">
          <li>
            <a href="/Profile" className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 hover:text-blue-600">
              <User size={20} />
              Profile
            </a>
          </li>
          <li>
            <a href="/settings" className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 hover:text-blue-600">
              <Settings size={20} />
              Settings
            </a>
          </li>
          <li>
            <a href="/login" className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-red-50 text-red-500">
              <LogOut size={20} />
              Logout
            </a>
          </li>
        </ul>
      </div>

      <div className="h-24"></div>
    </>
  );
}