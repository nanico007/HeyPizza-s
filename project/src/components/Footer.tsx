import React from 'react';
import { Pizza, Clock, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 border-t border-amber-600/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 rounded-full shadow-lg">
                <Pizza className="h-8 w-8 text-gray-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                  HeyPizza's
                </h3>
                <p className="text-sm text-amber-200">Delivery Premium</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Pizzas artesanais com ingredientes frescos e receitas tradicionais italianas, 
              entregues com amor diretamente na sua casa.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-amber-400">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-500" />
                <div className="text-gray-300">
                  <div>Ter-Dom: 17:30 às 00:00</div>
                  <div className="text-sm text-red-400">Fechado nas Segundas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-amber-400">Links Rápidos</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Cardápio
              </a>
              <a href="#" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Promoções
              </a>
              <a href="#" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Sobre Nós
              </a>
              <a href="#" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-amber-400">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 p-3 rounded-full transition-all duration-300 border border-amber-600/30">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 p-3 rounded-full transition-all duration-300 border border-amber-600/30">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 p-3 rounded-full transition-all duration-300 border border-amber-600/30">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Siga-nos para ficar por dentro das novidades e promoções exclusivas!
            </p>
          </div>
        </div>

        <div className="border-t border-amber-600/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 HeyPizza's. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;