import React, { useEffect, useState } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

interface OrderNotificationProps {
  isVisible: boolean;
  onClose: () => void;
}

const OrderNotification: React.FC<OrderNotificationProps> = ({ isVisible, onClose }) => {
  const [stage, setStage] = useState<'entering' | 'baking' | 'complete'>('entering');

  useEffect(() => {
    if (isVisible) {
      setStage('entering');
      
      // Animação da pizza entrando no forno
      const enterTimer = setTimeout(() => {
        setStage('baking');
      }, 1000);

      // Mostrar como completo após alguns segundos
      const completeTimer = setTimeout(() => {
        setStage('complete');
      }, 3000);

      // Auto fechar após 6 segundos
      const closeTimer = setTimeout(() => {
        onClose();
      }, 6000);

      return () => {
        clearTimeout(enterTimer);
        clearTimeout(completeTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-amber-600/30 max-w-sm">
        {/* Animação do Forno */}
        <div className="relative mb-4">
          <div className="bg-gradient-to-b from-amber-600 to-amber-800 rounded-lg p-4 relative overflow-hidden">
            {/* Forno */}
            <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg h-20 relative">
              {/* Chamas do forno */}
              <div className="absolute bottom-0 left-0 right-0 h-3">
                <div className="flex space-x-1 h-full">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300 rounded-t-full animate-pulse"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '0.8s'
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Pizza */}
              <div 
                className={`absolute top-2 transition-all duration-1000 ease-in-out ${
                  stage === 'entering' 
                    ? '-right-12 opacity-0' 
                    : 'right-2 opacity-100'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-full relative">
                  {/* Ingredientes da pizza */}
                  <div className="absolute top-1 left-2 w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <div className="absolute bottom-2 left-3 w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute bottom-1 right-3 w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Porta do forno */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-700 to-amber-900 rounded-lg border-2 border-amber-800">
              <div className="absolute top-2 left-2 w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="absolute inset-2 border border-amber-600 rounded"></div>
            </div>
          </div>
        </div>

        {/* Mensagem */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            {stage === 'complete' ? (
              <CheckCircle className="h-6 w-6 text-green-400" />
            ) : (
              <Clock className="h-6 w-6 text-amber-400 animate-spin" />
            )}
            <h3 className="text-lg font-bold text-white">
              {stage === 'complete' ? 'Pedido Confirmado!' : 'Preparando seu pedido'}
            </h3>
          </div>
          
          <p className="text-gray-300 text-sm mb-3">
            {stage === 'complete' 
              ? 'Seu pedido foi confirmado e está sendo preparado com carinho!'
              : 'Sua pizza está entrando no forno...'
            }
          </p>

          {stage === 'complete' && (
            <div className="bg-amber-600/20 p-3 rounded-lg border border-amber-600/30">
              <p className="text-amber-200 text-sm font-medium">
                ⏱️ Tempo estimado: 35-45 minutos
              </p>
            </div>
          )}
        </div>

        {/* Botão para fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OrderNotification;