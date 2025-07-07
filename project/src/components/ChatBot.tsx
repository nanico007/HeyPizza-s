import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const { state, dispatch } = useApp();
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state.chatMessages]);

  if (!state.isChatOpen) return null;

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('cardápio') || lowerMessage.includes('pizza') || lowerMessage.includes('sabor')) {
      return 'Temos mais de 20 sabores deliciosos! Nossas categorias incluem: Tradicionais (Margherita, Calabresa), Especiais (Quatro Queijos, Portuguesa), Premium (Salmão, Parma) e Doces (Chocolate, Brigadeiro). Qual categoria te interessa mais?';
    }
    
    if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custa')) {
      return 'Nossos preços variam de R$ 32,90 a R$ 58,90 dependendo do sabor. Pizzas tradicionais custam entre R$ 32,90-38,90, especiais R$ 37,90-46,90, premium R$ 48,90-58,90 e doces R$ 36,90-42,90. Quer saber o preço de algum sabor específico?';
    }
    
    if (lowerMessage.includes('entrega') || lowerMessage.includes('delivery') || lowerMessage.includes('tempo')) {
      return 'Nossa entrega é super rápida! Entregamos em até 45 minutos. A taxa de entrega é de R$ 8,90. Você pode acompanhar seu pedido em tempo real após a confirmação.';
    }
    
    if (lowerMessage.includes('tamanho') || lowerMessage.includes('tamanhos')) {
      return 'Oferecemos 3 tamanhos: Pequena (25cm - 8 fatias), Média (30cm - 12 fatias) e Grande (35cm - 16 fatias). O preço varia conforme o tamanho escolhido.';
    }
    
    if (lowerMessage.includes('meio a meio') || lowerMessage.includes('dois sabores')) {
      return 'Sim! Você pode fazer sua pizza meio a meio com dois sabores diferentes. É uma ótima opção para experimentar mais variedades. O preço será a média dos dois sabores escolhidos.';
    }
    
    if (lowerMessage.includes('adicional') || lowerMessage.includes('extra')) {
      return 'Temos vários adicionais disponíveis: Queijos extras (Catupiry, Parmesão, Gorgonzola), Carnes (Bacon, Pepperoni, Presunto), Vegetais (Azeitona, Champignon, Rúcula) e Temperos. Os preços variam de R$ 1,00 a R$ 6,00.';
    }
    
    if (lowerMessage.includes('bebida') || lowerMessage.includes('refrigerante')) {
      return 'Temos uma grande variedade de bebidas! Refrigerantes (Coca-Cola, Guaraná, Fanta, Sprite) em lata e 2L, sucos naturais e águas. Os preços variam de R$ 3,50 a R$ 8,90.';
    }
    
    if (lowerMessage.includes('pagamento') || lowerMessage.includes('pagar')) {
      return 'Aceitamos diversas formas de pagamento: Cartão de crédito, débito, PIX e dinheiro. Para PIX geramos um QR code na hora. Para dinheiro, você pode informar se precisa de troco!';
    }
    
    if (lowerMessage.includes('promoção') || lowerMessage.includes('desconto')) {
      return 'Sempre temos promoções especiais! Acompanhe nossas redes sociais para não perder as ofertas. Clientes cadastrados recebem descontos exclusivos!';
    }
    
    if (lowerMessage.includes('ingrediente') || lowerMessage.includes('alergia')) {
      return 'Todos os ingredientes estão listados em cada pizza. Se você tem alguma alergia ou restrição alimentar, me informe que posso te ajudar a escolher as melhores opções!';
    }
    
    if (lowerMessage.includes('obrigado') || lowerMessage.includes('obrigada') || lowerMessage.includes('valeu')) {
      return 'De nada! Fico feliz em ajudar! Se precisar de mais alguma coisa ou quiser fazer seu pedido, estarei aqui. Bom apetite! 🍕';
    }
    
    if (lowerMessage.includes('oi') || lowerMessage.includes('olá') || lowerMessage.includes('ola')) {
      return 'Olá! Bem-vindo à HeyPizza\'s! 🍕 Sou seu assistente virtual e estou aqui para ajudar com seu pedido. Posso te contar sobre nossos sabores, preços, promoções e muito mais. Como posso ajudar você hoje?';
    }
    
    return 'Desculpe, não entendi sua pergunta. Posso te ajudar com informações sobre nosso cardápio, preços, entrega, tamanhos, adicionais, bebidas ou qualquer dúvida sobre nossos serviços. O que você gostaria de saber?';
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    dispatch({ type: 'ADD_CHAT_MESSAGE', payload: userMessage });

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      dispatch({ type: 'ADD_CHAT_MESSAGE', payload: botResponse });
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-amber-600/30 flex flex-col z-50">
      <div className="p-4 border-b border-amber-600/30 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">Assistente Virtual</h3>
              <p className="text-xs text-amber-100">Online agora</p>
            </div>
          </div>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_CHAT' })}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {state.chatMessages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
              <div className={`p-2 rounded-full ${message.isBot ? 'bg-amber-600' : 'bg-gray-600'}`}>
                {message.isBot ? (
                  <Bot className="h-4 w-4 text-white" />
                ) : (
                  <User className="h-4 w-4 text-white" />
                )}
              </div>
              <div
                className={`p-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-gray-700 text-white'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-400' : 'text-gray-800'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-amber-600/30">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-amber-500 focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 p-2 rounded-lg transition-all duration-300 shadow-lg"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;