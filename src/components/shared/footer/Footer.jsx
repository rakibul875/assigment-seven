import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2f5d50] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-bold mb-2">KeenKeeper</h1>

  
        <p className="text-sm text-gray-200 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

 
        <div className="mb-8">
          <p className="mb-3 font-medium">Social Links</p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-circle btn-sm bg-white text-black hover:bg-gray-200">
              f
            </button>
            <button className="btn btn-circle btn-sm bg-white text-black hover:bg-gray-200">
              t
            </button>
            <button className="btn btn-circle btn-sm bg-white text-black hover:bg-gray-200">
              x
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 border-t border-gray-400 pt-6">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;