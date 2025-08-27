import ChatBot from './components/ChatBot';
import BeverageMenu from './components/BeverageMenu';
import PaymentModal from './components/PaymentModal';
import OrderNotification from './components/OrderNotification';
import { useApp } from './contexts/AppContext';

function App() {
  const { state, dispatch } = useApp();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <Hero />
        <BeverageMenu />
        <ChatBot />
        <PaymentModal />
        <OrderNotification 
          isVisible={state.showOrderNotification}
          onClose={() => dispatch({ type: 'HIDE_ORDER_NOTIFICATION' })}
        />
      </div>
    </>
  );
}

export default App;