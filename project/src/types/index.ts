export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'tradicional' | 'especial' | 'premium' | 'doce';
  ingredients: string[];
}

export interface Beverage {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'refrigerante' | 'suco' | 'agua';
  size: string;
}

export interface Additional {
  id: string;
  name: string;
  price: number;
  category: 'queijo' | 'carne' | 'vegetal' | 'tempero';
}

export interface CartItem {
  id: string;
  pizza?: Pizza;
  beverage?: Beverage;
  secondPizza?: Pizza;
  additionals?: Additional[];
  size: 'pequena' | 'média' | 'grande';
  quantity: number;
  halfAndHalf: boolean;
  totalPrice: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    zipCode: string;
  };
}

export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  deliveryFee: number;
  status: 'preparing' | 'baking' | 'delivering' | 'delivered';
  createdAt: Date;
  estimatedDelivery: Date;
}