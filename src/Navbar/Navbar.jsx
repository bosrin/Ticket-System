import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold text-gray-800">
          CS — Ticket System
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
          <li className="hover:text-blue-600 cursor-pointer">Changelog</li>
          <li className="hover:text-blue-600 cursor-pointer">Blog</li>
          <li className="hover:text-blue-600 cursor-pointer">Download</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-md text-sm font-semibold transition">
            + New Ticket
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-300 px-4 py-4 space-y-3 text-gray-700 font-medium">
          <p className="hover:text-blue-600 cursor-pointer">Home</p>
          <p className="hover:text-blue-600 cursor-pointer">FAQ</p>
          <p className="hover:text-blue-600 cursor-pointer">Changelog</p>
          <p className="hover:text-blue-600 cursor-pointer">Blog</p>
          <p className="hover:text-blue-600 cursor-pointer">Download</p>
          <p className="hover:text-blue-600 cursor-pointer">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;