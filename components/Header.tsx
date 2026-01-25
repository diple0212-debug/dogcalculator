
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const PawIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v1.586l-2.293-2.293a1 1 0 00-1.414 1.414L7.586 7H6a1 1 0 00-1 1 1.5 1.5 0 001.5 1.5h.063a4.5 4.5 0 015.874 0H13.5A1.5 1.5 0 0015 8a1 1 0 00-1-1h-1.586l2.293-2.293a1 1 0 00-1.414-1.414L11 5.586V4a1 1 0 00-1-1zM6.5 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM13.5 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
    <path d="M10 12a4.5 4.5 0 00-4.472 4.004A2.002 2.002 0 007.5 18h5a2.002 2.002 0 001.972-1.996A4.5 4.5 0 0010 12z" />
  </svg>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = "text-lg font-medium text-gray-600 hover:text-orange-500 transition-colors px-3 py-2 rounded-lg";
  const activeNavLinkClass = "text-lg font-medium text-orange-500";
  
  const mobileNavLinkClass = "block px-4 py-3 rounded-lg text-lg font-semibold text-gray-700 hover:bg-orange-100";
  const activeMobileNavLinkClass = "block px-4 py-3 rounded-lg text-lg font-semibold bg-orange-500 text-white";

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center gap-2">
            <PawIcon />
            <span className="text-xl font-bold text-gray-800">똑똑한 집사</span>
          </NavLink>

          <nav className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}>나이 계산기</NavLink>
            <NavLink to="/obesity" className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}>비만도 계산기</NavLink>
            <NavLink to="/food" className={({ isActive }) => isActive ? activeNavLinkClass : navLinkClass}>사료량 계산기</NavLink>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-orange-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <nav className="flex flex-col space-y-2">
            <NavLink to="/" className={({ isActive }) => isActive ? activeMobileNavLinkClass : mobileNavLinkClass} onClick={() => setIsOpen(false)}>나이 계산기</NavLink>
            <NavLink to="/obesity" className={({ isActive }) => isActive ? activeMobileNavLinkClass : mobileNavLinkClass} onClick={() => setIsOpen(false)}>비만도 계산기</NavLink>
            <NavLink to="/food" className={({ isActive }) => isActive ? activeMobileNavLinkClass : mobileNavLinkClass} onClick={() => setIsOpen(false)}>사료량 계산기</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
