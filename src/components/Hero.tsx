import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <span className="text-red-400 font-semibold">LOJA ESPECIALIZADA</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Pneus de
            <span className="text-red-500 block">Alta Performance</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl">
            Mais de 15 anos fornecendo pneus premium com instalação profissional 
            e garantia total para sua segurança e performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Ver Produtos
            </button>
            <button
  onClick={() => window.open('https://wa.me/1399999999', '_blank')}
  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
>
              Agendar Serviço
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <Shield className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">15+</div>
              <div className="text-gray-400">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-gray-400">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-gray-400">Marcas Disponíveis</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">24h</div>
              <div className="text-gray-400">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
