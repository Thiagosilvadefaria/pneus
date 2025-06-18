import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>(13)99742-9361</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>São Paulo, SP</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>Seg-Sex: 8h-18h | Sáb: 8h-14h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PneusTurbo</h1>
                <p className="text-sm text-gray-600">Professional Tire Shop</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Início
              </a>
              <a href="#products" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Produtos
              </a>
              <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Serviços
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Sobre
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Contato
              </a>
              <button
  onClick={() => window.open('https://wa.me/13997429361', '_blank')}
  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
>
                Orçamento
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
  onClick={() => window.open('https://wa.me/13997429361', '_blank')}
  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-red-600 font-medium">
                  Início
                </a>
                <a href="#products" className="text-gray-700 hover:text-red-600 font-medium">
                  Produtos
                </a>
                <a href="#services" className="text-gray-700 hover:text-red-600 font-medium">
                  Serviços
                </a>
                <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">
                  Sobre
                </a>
                <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium">
                  Contato
                </a>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium w-fit">
                  Orçamento
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;