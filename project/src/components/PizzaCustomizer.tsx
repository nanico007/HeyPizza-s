import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { pizzas, pizzaSizes, additionals } from '../data/pizzas';
import { Pizza, Additional } from '../types';

const PizzaCustomizer: React.FC = () => {
  const { state, dispatch } = useApp();
  const [selectedSize, setSelectedSize] = useState<'pequena' | 'média' | 'grande'>('média');
  const [quantity, setQuantity] = useState(1);
  const [halfAndHalf, setHalfAndHalf] = useState(false);
  const [secondPizza, setSecondPizza] = useState<Pizza | null>(null);
  const [selectedAdditionals, setSelectedAdditionals] = useState<Additional[]>([]);

  if (!state.isPizzaCustomizerOpen || !state.selectedPizza) return null;

  const pizza = state.selectedPizza;
  const sizeMultiplier = pizzaSizes.find(s => s.id === selectedSize)?.multiplier || 1;
  const basePrice = halfAndHalf && secondPizza 
    ? (pizza.price + secondPizza.price) / 2 
    : pizza.price;
  const additionalsPrice = selectedAdditionals.reduce((total, additional) => total + additional.price, 0);
  const finalPrice = (basePrice + additionalsPrice) * sizeMultiplier * quantity;

  const toggleAdditional = (additional: Additional) => {
    setSelectedAdditionals(prev => {
      const exists = prev.find(a => a.id === additional.id);
      if (exists) {
        return prev.filter(a => a.id !== additional.id);
      } else {
        return [...prev, additional];
      }
    });
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: Date.now().toString(),
      pizza,
      secondPizza: halfAndHalf ? secondPizza : undefined,
      additionals: selectedAdditionals,
      size: selectedSize,
      quantity,
      halfAndHalf,
      totalPrice: finalPrice
    };

    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    dispatch({ type: 'TOGGLE_PIZZA_CUSTOMIZER' });
    
    // Reset states
    setSelectedSize('média');
    setQuantity(1);
    setHalfAndHalf(false);
    setSecondPizza(null);
    setSelectedAdditionals([]);
  };

  const additionalsByCategory = {
    queijo: additionals.filter(a => a.category === 'queijo'),
    carne: additionals.filter(a => a.category === 'carne'),
    vegetal: additionals.filter(a => a.category === 'vegetal'),
    tempero: additionals.filter(a => a.category === 'tempero')
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-amber-600/30 shadow-2xl">
        <div className="p-6 border-b border-amber-600/30">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Personalizar Pizza</h2>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_PIZZA_CUSTOMIZER' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Pizza Principal */}
          <div className="flex items-center space-x-4 bg-amber-600/10 p-4 rounded-xl border border-amber-600/20">
            <img 
              src={pizza.image} 
              alt={pizza.name}
              className="w-24 h-24 object-cover rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-bold text-white">{pizza.name}</h3>
              <p className="text-gray-300">{pizza.description}</p>
              <p className="text-amber-400 font-bold text-lg">R$ {pizza.price.toFixed(2)}</p>
            </div>
          </div>

          {/* Meio a Meio */}
          <div className="bg-gray-800/50 p-6 rounded-xl border border-amber-600/20">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={halfAndHalf}
                onChange={(e) => setHalfAndHalf(e.target.checked)}
                className="w-5 h-5 text-amber-600 rounded border-amber-600/30 bg-gray-700"
              />
              <span className="text-xl font-bold text-white">Meio a Meio</span>
            </label>
            <p className="text-gray-300 mt-2">
              Escolha dois sabores para sua pizza
            </p>
          </div>

          {/* Segunda Pizza (se meio a meio) */}
          {halfAndHalf && (
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Escolha o segundo sabor:</h4>
              <div className="grid grid-cols-1 gap-3 max-h-48 overflow-y-auto">
                {pizzas.filter(p => p.id !== pizza.id).map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSecondPizza(p)}
                    className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 ${
                      secondPizza?.id === p.id 
                        ? 'border-amber-500 bg-amber-600/20' 
                        : 'border-gray-600 hover:border-amber-600/50 bg-gray-800/30'
                    }`}
                  >
                    <img 
                      src={p.image} 
                      alt={p.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 text-left">
                      <div className="font-bold text-white">{p.name}</div>
                      <div className="text-amber-400 font-bold">R$ {p.price.toFixed(2)}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Adicionais */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Adicionais:</h4>
            
            {Object.entries(additionalsByCategory).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h5 className="text-lg font-semibold text-amber-400 capitalize">{category}s</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {items.map(additional => (
                    <button
                      key={additional.id}
                      onClick={() => toggleAdditional(additional)}
                      className={`p-3 rounded-lg border transition-all duration-300 text-left ${
                        selectedAdditionals.find(a => a.id === additional.id)
                          ? 'border-amber-500 bg-amber-600/20' 
                          : 'border-gray-600 hover:border-amber-600/50 bg-gray-800/30'
                      }`}
                    >
                      <div className="font-medium text-white text-sm">{additional.name}</div>
                      <div className="text-amber-400 font-bold text-sm">+R$ {additional.price.toFixed(2)}</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tamanho */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Tamanho:</h4>
            <div className="grid grid-cols-3 gap-4">
              {pizzaSizes.map(size => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id as any)}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    selectedSize === size.id 
                      ? 'border-amber-500 bg-amber-600/20' 
                      : 'border-gray-600 hover:border-amber-600/50 bg-gray-800/30'
                  }`}
                >
                  <div className="font-bold text-white">{size.name}</div>
                  <div className="text-gray-300 text-sm">{size.description}</div>
                  <div className="text-amber-400 font-bold text-sm">
                    +{((size.multiplier - 1) * 100).toFixed(0)}%
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quantidade */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Quantidade:</h4>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors"
              >
                <Minus className="h-5 w-5 text-white" />
              </button>
              <span className="text-2xl font-bold w-12 text-center text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors"
              >
                <Plus className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-amber-600/30 bg-gray-900/50">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xl font-bold text-white">Total:</span>
            <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              R$ {finalPrice.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={halfAndHalf && !secondPizza}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-gray-600 disabled:to-gray-700 text-gray-900 disabled:text-gray-400 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCustomizer;