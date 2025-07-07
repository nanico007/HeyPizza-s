import React from 'react';
import { ShoppingCart, User, Pizza, MessageCircle, Coffee, Clock } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Header: React.FC = () => {
  const { state, dispatch } = useApp();
  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  const getCurrentDay = () => {
    const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return days[new Date().getDay()];
  };

  const isOpen = () => {
    const currentDay = getCurrentDay();
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const currentTime = currentHour + currentMinute / 60;
    
    // Fechado nas segundas
    if (currentDay === 'segunda') return false;
    
    // Horário: 17:30 às 00:00 (meia-noite)
    return currentTime >= 17.5 || currentTime < 1;
  };

  const getStatusText = () => {
    const currentDay = getCurrentDay();
    if (currentDay === 'segunda') {
      return 'Fechado - Segundas';
    }
    return isOpen() ? 'Aberto Agora' : 'Fechado';
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-amber-900 to-red-900 text-white shadow-2xl sticky top-0 z-50 border-b border-amber-600/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-full shadow-lg">
              <Pizza className="h-8 w-8 text-gray-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                HeyPizza's
              </h1>
              <p className="text-sm text-amber-200">Delivery Premium</p>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="hidden lg:flex items-center space-x-3 bg-gray-900/50 px-4 py-2 rounded-xl border border-amber-600/30">
            <Clock className="h-5 w-5 text-amber-400" />
            <div className="text-sm">
              <div className={`font-bold ${isOpen() ? 'text-green-400' : 'text-red-400'}`}>
                {getStatusText()}
              </div>
              <div className="text-amber-200 text-xs">
                Ter-Dom: 17:30-00:00
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {state.user ? (
              <div className="flex items-center space-x-2">
                <div className="bg-amber-600/30 p-2 rounded-full">
                  <User className="h-5 w-5" />
                </div>
                <span className="hidden md:inline text-amber-100">Olá, {state.user.name}</span>
              </div>
            ) : (
              <div className="hidden md:flex space-x-2">
                <button
                  onClick={() => dispatch({ type: 'TOGGLE_LOGIN' })}
                  className="bg-amber-600/30 hover:bg-amber-600/50 px-4 py-2 rounded-lg transition-all duration-300 border border-amber-600/50"
                >
                  Entrar
                </button>
                <button
                  onClick={() => dispatch({ type: 'TOGGLE_SIGNUP' })}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 px-4 py-2 rounded-lg transition-all duration-300 font-semibold shadow-lg"
                >
                  Cadastrar
                </button>
              </div>
            )}

            <button
              onClick={() => dispatch({ type: 'TOGGLE_BEVERAGE_MENU' })}
              className="relative bg-amber-600/30 hover:bg-amber-600/50 p-3 rounded-full transition-all duration-300 border border-amber-600/50"
            >
              <Coffee className="h-6 w-6" />
            </button>

            <button
              onClick={() => dispatch({ type: 'TOGGLE_CHAT' })}
              className="relative bg-amber-600/30 hover:bg-amber-600/50 p-3 rounded-full transition-all duration-300 border border-amber-600/50"
            >
              <MessageCircle className="h-6 w-6" />
            </button>

            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative bg-amber-600/30 hover:bg-amber-600/50 p-3 rounded-full transition-all duration-300 border border-amber-600/50"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;