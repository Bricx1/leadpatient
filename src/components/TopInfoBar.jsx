import React from 'react';
import {
  MapPin,
  Clock,
  Search,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

const TopInfoBar = () => {
  return (
    <div className="bg-[#24336E] text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 py-2">
        {/* Left Side Info */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-1">
            <span className="font-semibold">24/7 Emergency</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          <div className="flex items-center gap-1 text-blue-100">
            <MapPin className="w-4 h-4 text-blue-300" />
            <span>Location: 673 Martin Luther King Jr Blvd N, Pontiac, MI 48342</span>
          </div>

          <div className="flex items-center gap-1 text-blue-100">
            <Clock className="w-4 h-4 text-blue-300" />
            <span>Mon - Sat: 6:00 am - 2:00 pm</span>
          </div>
        </div>

        {/* Right Side Social & Search */}
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <div className="flex gap-2 text-teal-300">
            <a href="#" aria-label="Facebook"><Facebook className="w-4 h-4 hover:text-white" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-4 h-4 hover:text-white" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-4 h-4 hover:text-white" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="w-4 h-4 hover:text-white" /></a>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-2 pr-7 py-1 rounded-md bg-[#1e2a56] text-white placeholder-blue-200 focus:outline-none text-sm"
            />
            <Search className="absolute right-2 top-1.5 w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
