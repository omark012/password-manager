import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 h-16 text-white">
      <div className="mycontainer h-full flex justify-between items-center px-10 py-4">
        <div className="logo font-bold text-2xl">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">Box/&gt;</span>
        </div>

        <a href="https://www.github.com" target="_blank">
          <img
            src="/images/github.png"
            className="w-14 invert"
            alt="github logo"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
