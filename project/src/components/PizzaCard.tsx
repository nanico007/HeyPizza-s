import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Pizza } from '../types';
import { useApp } from '../contexts/AppContext';

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const { dispatch } = useApp();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tradicional': return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'especial': return 'bg-red-100 text-red-800 border-red-300';
      case 'premium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'doce': return 'bg-pink-100 text-pink-800 border-pink-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-amber-500/20 hover:shadow-2xl transition-all duration-500 group border border-amber-600/20">
      <div className="relative">
        <img 
          src={pizza.image} 
          alt={pizza.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor(pizza.category)}`}>
            {pizza.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2 border border-amber-600/30">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-amber-400 fill-current" />
            <span className="text-sm font-bold text-white">4.8</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
          {pizza.name}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
          {pizza.description}
        </p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {pizza.ingredients.slice(0, 3).map((ingredient, index) => (
              <span key={index} className="bg-amber-600/20 text-amber-200 px-2 py-1 rounded-full text-xs border border-amber-600/30">
                {ingredient}
              </span>
            ))}
            {pizza.ingredients.length > 3 && (
              <span className="text-amber-400 text-xs font-medium">+{pizza.ingredients.length - 3} mais</span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
            R$ {pizza.price.toFixed(2)}
          </div>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_PIZZA_CUSTOMIZER', payload: pizza })}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 group font-bold shadow-lg hover:shadow-amber-500/30"
          >
            <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;