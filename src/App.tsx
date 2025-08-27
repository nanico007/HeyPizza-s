import React from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import PizzaMenu from './components/PizzaMenu';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import PizzaCustomizer from './components/PizzaCustomizer';
import Cart from './components/Cart';
import ChatBot from './components/ChatBot';
import BeverageMenu from './components/BeverageMenu';
import PaymentModal from './components/PaymentModal';
import OrderNotification from './components/OrderNotification';

const AppContent: React.FC = () => {
  const { state, dispatch } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <Hero />
      <PizzaMenu />
      <Footer />
      
      {/* Modals */}
      <AuthModal />
      <PizzaCustomizer />
      <Cart />
      <BeverageMenu />
      <ChatBot />
      <PaymentModal />
      <OrderNotification 
        isVisible={state.showOrderNotification}
        onClose={() => dispatch({ type: 'HIDE_ORDER_NOTIFICATION' })}
      />
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;