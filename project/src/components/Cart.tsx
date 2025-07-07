import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useApp();

  if (!state.isCartOpen) return null;

  const cartTotal = state.cart.reduce((total, item) => total + item.totalPrice, 0);
  const deliveryFee = 8.90;
  const finalTotal = cartTotal + deliveryFee;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_CART_ITEM', payload: { id, quantity: newQuantity } });
    }
  };

  const handleCheckout = () => {
    if (!state.user) {
      dispatch({ type: 'TOGGLE_LOGIN' });
    } else {
      dispatch({ type: 'TOGGLE_PAYMENT' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-end p-4 z-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl w-full max-w-md h-full flex flex-col border border-amber-600/30 shadow-2xl">
        <div className="p-6 border-b border-amber-600/30">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Seu Carrinho</h2>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {state.cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Seu carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.cart.map(item => (
                <div key={item.id} className="bg-gray-800/50 p-4 rounded-xl border border-amber-600/20">
                  <div className="flex items-start space-x-3">
                    {item.pizza && (
                      <img 
                        src={item.pizza.image} 
                        alt={item.pizza.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    )}
                    {item.beverage && (
                      <img 
                        src={item.beverage.image} 
                        alt={item.beverage.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold text-white">
                        {item.pizza?.name || item.beverage?.name}
                        {item.halfAndHalf && item.secondPizza && (
                          <span className="text-sm font-normal text-gray-300">
                            {' '}+ {item.secondPizza.name}
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {item.pizza && `Tamanho: ${item.size} • ${item.halfAndHalf ? 'Meio a meio' : 'Sabor único'}`}
                        {item.beverage && `${item.beverage.size}`}
                      </p>
                      {item.additionals && item.additionals.length > 0 && (
                        <p className="text-xs text-amber-400">
                          Adicionais: {item.additionals.map(a => a.name).join(', ')}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-gray-700 hover:bg-gray-600 p-1 rounded transition-colors"
                          >
                            <Minus className="h-4 w-4 text-white" />
                          </button>
                          <span className="font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-gray-700 hover:bg-gray-600 p-1 rounded transition-colors"
                          >
                            <Plus className="h-4 w-4 text-white" />
                          </button>
                        </div>
                        <span className="font-bold text-amber-400">
                          R$ {item.totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {state.cart.length > 0 && (
          <div className="p-6 border-t border-amber-600/30 bg-gray-900/50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-white">
                <span>Subtotal:</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Taxa de entrega:</span>
                <span>R$ {deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <span className="text-white">Total:</span>
                <span className="text-amber-400">R$ {finalTotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
            >
              {state.user ? 'Ir para Pagamento' : 'Fazer Login para Continuar'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;