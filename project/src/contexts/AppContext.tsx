import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { CartItem, User, Pizza, Beverage, ChatMessage } from '../types';

interface AppState {
  user: User | null;
  cart: CartItem[];
  isLoginOpen: boolean;
  isSignupOpen: boolean;
  isPizzaCustomizerOpen: boolean;
  selectedPizza: Pizza | null;
  isCartOpen: boolean;
  isChatOpen: boolean;
  chatMessages: ChatMessage[];
  isBeverageMenuOpen: boolean;
  isPaymentOpen: boolean;
}

type AppAction = 
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_ITEM'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_LOGIN' }
  | { type: 'TOGGLE_SIGNUP' }
  | { type: 'TOGGLE_PIZZA_CUSTOMIZER'; payload?: Pizza }
  | { type: 'TOGGLE_CART' }
  | { type: 'TOGGLE_CHAT' }
  | { type: 'ADD_CHAT_MESSAGE'; payload: ChatMessage }
  | { type: 'TOGGLE_BEVERAGE_MENU' }
  | { type: 'TOGGLE_PAYMENT' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const initialState: AppState = {
  user: null,
  cart: [],
  isLoginOpen: false,
  isSignupOpen: false,
  isPizzaCustomizerOpen: false,
  selectedPizza: null,
  isCartOpen: false,
  isChatOpen: false,
  chatMessages: [
    {
      id: '1',
      text: 'Olá! Sou o assistente virtual da HeyPizza\'s. Como posso ajudá-lo hoje?',
      isBot: true,
      timestamp: new Date()
    }
  ],
  isBeverageMenuOpen: false,
  isPaymentOpen: false
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'TOGGLE_LOGIN':
      return { ...state, isLoginOpen: !state.isLoginOpen, isSignupOpen: false };
    case 'TOGGLE_SIGNUP':
      return { ...state, isSignupOpen: !state.isSignupOpen, isLoginOpen: false };
    case 'TOGGLE_PIZZA_CUSTOMIZER':
      return {
        ...state,
        isPizzaCustomizerOpen: !state.isPizzaCustomizerOpen,
        selectedPizza: action.payload || null
      };
    case 'TOGGLE_CART':
      return { ...state, isCartOpen: !state.isCartOpen };
    case 'TOGGLE_CHAT':
      return { ...state, isChatOpen: !state.isChatOpen };
    case 'ADD_CHAT_MESSAGE':
      return { ...state, chatMessages: [...state.chatMessages, action.payload] };
    case 'TOGGLE_BEVERAGE_MENU':
      return { ...state, isBeverageMenuOpen: !state.isBeverageMenuOpen };
    case 'TOGGLE_PAYMENT':
      return { ...state, isPaymentOpen: !state.isPaymentOpen };
    case 'LOAD_CART':
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('pizzaria-cart');
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('pizzaria-cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};