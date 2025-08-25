import React from "react";

export const Nav = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-slate-300 border-b border-black shadow-lg">
      <div className="mx-auto px-4">
        <div className="flex justify-around items-center h-14">
          <a href="#home" className="text-xl font-bold">
            JEREMYJ<span className="text-cyan-400">MALONEY</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
