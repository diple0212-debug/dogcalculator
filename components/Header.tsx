
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const PawIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v1.586l-2.293-2.293a1 1 0 00-1.414 1.414L7.586 7H6a1 1 0 00-1 1 1.5 1.5 0 001.5 1.5h.063a4.5 4.5 0 015.874 0H13.5A1.5 1.5 0 0015 8a1 1 0 00-1-1h-1.586l2.293-2.293a1 1 0 00-1.414-1.414L11 5.586V4a1 1 0 00-1-1zM6.5 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM13.5 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
    <path d="M10 12a4.5 4.5 0 00-4.472 4.004A2.002 2.002 0 007.5 18h5a2.002 2.002 0 001.972-1.996A4.5 4.5 0 0010 12z" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "홈" },
    { to: "/posts", label: "컬럼" },
    { to: "/age", label: "나이" },
    { to: "/obesity", label: "비만도" },
    { to: "/food", label: "사료량" },
    { to: "/anxiety-test", label: "분리불안" },
    { to: "/dog-mbti", label: "MBTI" },
    { to: "/health-advisor", label: "AI상담" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          <NavLink to="/" className="flex items-center gap-2">
            <PawIcon />
            <span className="text-xl font-black text-gray-800 tracking-tight">똑똑한 집사</span>
          </NavLink>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink 
                key={item.to}
                to={item.to} 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-lg text-sm font-bold transition-colors ${isActive ? 'text-orange-500 bg-orange-50' : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="lg:hidden border-t border-gray-100 overflow-x-auto no-scrollbar scroll-smooth flex py-2 -mx-4 px-4 bg-white shadow-inner">
          <div className="flex space-x-2 whitespace-nowrap">
            {navItems.map((item) => (
              <NavLink 
                key={item.to}
                to={item.to} 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-full text-sm font-black transition-all border ${isActive ? 'bg-orange-500 text-white border-orange-500 shadow-sm' : 'bg-gray-50 text-gray-500 border-gray-200'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} py-4 border-t border-gray-100`}>
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink 
                key={item.to}
                to={item.to} 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-3 rounded-xl text-lg font-bold ${isActive ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </header>
  );
};

export default Header;
