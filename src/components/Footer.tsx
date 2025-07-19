import React from "react";
import { Heart, Code } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Alam Hossain</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by a passionate developer</span>
          </div>

          <div className="text-gray-400 mt-4 md:mt-0">
            © 2025 All rights reserved
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Building the future, one line of code at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
