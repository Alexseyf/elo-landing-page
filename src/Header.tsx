import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className={`text-2xl font-bold ${isScrolled ? 'text-blue-text' : 'text-white'}`}>
              Elo
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#beneficios" className={`${isScrolled ? 'text-gray-text' : 'text-white'} hover:text-blue-icon transition-colors`}>
              Benefícios
            </a>
            <a href="#como-funciona" className={`${isScrolled ? 'text-gray-text' : 'text-white'} hover:text-blue-icon transition-colors`}>
              Como Funciona
            </a>
            <a href="#faq" className={`${isScrolled ? 'text-gray-text' : 'text-white'} hover:text-blue-icon transition-colors`}>
              FAQ
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${isScrolled ? 'text-blue-700' : 'text-white'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#beneficios" 
                className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#como-funciona" 
                className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a 
                href="#depoimentos" 
                className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#faq" 
                className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
