import React from 'react';
import { Clock, Truck, ChefHat } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-amber-900 to-red-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pizzas Artesanais
            <span className="block bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Entregues com Amor
            </span>
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Mais de 20 sabores únicos preparados com ingredientes frescos e receitas tradicionais italianas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
              <ChefHat className="h-10 w-10 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Receitas Tradicionais</h3>
            <p className="text-amber-200 leading-relaxed">Massas fermentadas por 24h e molhos artesanais preparados diariamente</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
              <Clock className="h-10 w-10 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Entrega Rápida</h3>
            <p className="text-amber-200 leading-relaxed">Máximo 45 minutos para sua casa com rastreamento em tempo real</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl">
              <Truck className="h-10 w-10 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Delivery Premium</h3>
            <p className="text-amber-200 leading-relaxed">Embalagem térmica e entregadores especializados para qualidade garantida</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;