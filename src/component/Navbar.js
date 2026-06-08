import React from "react";

export default function Navbar() {
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
             <b> A Social Responsibility App</b>
            </p>
          </div>

         
          <ul className="hidden md:flex items-center gap-12 text-gray-700 font-medium">
            <li className="text-blue-500 border-b-2 border-blue-500 pb-1 cursor-pointer">
              Roles
            </li>

            <li className="cursor-pointer hover:text-blue-500">
              Programs
            </li>

            <li className="cursor-pointer hover:text-blue-500">
              Community
            </li>

            <li className="cursor-pointer hover:text-blue-500">
              FAQs
            </li>
          </ul>

        
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
            T
          </div>

        </div>
      </nav>

      
      <div className="h-24"></div>
    </>
  );
}