import React from 'react';
import { X, Plus } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { beverages } from '../data/pizzas';
import { Beverage } from '../types';

const BeverageMenu: React.FC = () => {
  const { state, dispatch } = useApp();

  if (!state.isBeverageMenuOpen) return null;

  const addBeverageToCart = (beverage: Beverage) => {
    const cartItem = {
      id: Date.now().toString(),
      beverage,
      size: 'média' as const,
      quantity: 1,
      halfAndHalf: false,
      totalPrice: beverage.price
    };

    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  const beveragesByCategory = {
    refrigerante: beverages.filter(b => b.category === 'refrigerante'),
    suco: beverages.filter(b => b.category === 'suco'),
    agua: beverages.filter(b => b.category === 'agua')
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'refrigerante': return 'Refrigerantes';
      case 'suco': return 'Sucos';
      case 'agua': return 'Águas';
      default: return category;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-end p-4 z-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl w-full max-w-md h-full flex flex-col border border-amber-600/30 shadow-2xl">
        <div className="p-6 border-b border-amber-600/30">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Bebidas</h2>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_BEVERAGE_MENU' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-8">
            {Object.entries(beveragesByCategory).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-bold text-amber-400">{getCategoryTitle(category)}</h3>
                <div className="space-y-3">
                  {items.map(beverage => (
                    <div key={beverage.id} className="bg-gray-800/50 p-4 rounded-xl border border-amber-600/20 hover:border-amber-600/40 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={beverage.image} 
                          alt={beverage.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-white">{beverage.name}</h4>
                          <p className="text-gray-300 text-sm">{beverage.description}</p>
                          <p className="text-amber-400 text-sm">{beverage.size}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-lg font-bold text-amber-400">
                              R$ {beverage.price.toFixed(2)}
                            </span>
                            <button
                              onClick={() => addBeverageToCart(beverage)}
                              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 font-bold shadow-lg"
                            >
                              <Plus className="h-4 w-4" />
                              <span>Adicionar</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeverageMenu;