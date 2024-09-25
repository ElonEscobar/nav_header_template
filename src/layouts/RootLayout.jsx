import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div>
        <header className="bg-[#CCCCCC] font-poppins pr-2 ">
          <nav className="flex justify-between items-center h-[5.2rem] relative">
            <NavLink to="/">
              <div className=" h-full w-[12rem]">
                <img src="/logo.png" alt="logo" className="py-2 w-full" />
              </div>
            </NavLink>

            {/* Hamburger Icon */}
            <button
              className="sm:hidden flex flex-col justify-between w-8 h-8 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="block w-full h-[2px] bg-black"></span>
              <span className="block w-full h-[2px] bg-black"></span>
              <span className="block w-full h-[2px] bg-black"></span>
            </button>

            <div
              className={`z-50 bg-[#CCCCCC] rounded-lg absolute top-20 right-0 sm:top-1 flex justify-center items-center gap-10 ${
                menuOpen ? "block" : "hidden"
              } sm:block`}
            >
              <div className="text-lg lg:text-2xl flex flex-col items-center sm:flex-row gap-2 xl:gap-4 lg:gap-6 p-3 lg:p-4">
                <NavLink
                  to="/"
                  className="hover:border-b-4 hover:text-[#673F69]  hover:border-[#673F69] transition-all ease-in duration-200"
                >
                  Home
                </NavLink>
                <NavLink
                  to="about"
                  className="hover:border-b-4 hover:text-[#673F69]  hover:border-[#673F69] transition-all ease-in duration-200"
                >
                  About
                </NavLink>

                <NavLink
                  to="help"
                  className="hover:border-b-4 hover:text-[#673F69]  hover:border-[#673F69] transition-all ease-in duration-200"
                >
                  Help
                </NavLink>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
