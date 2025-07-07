import { Pizza, Beverage, Additional } from '../types';

export const pizzas: Pizza[] = [
  {
    id: '1',
    name: 'Margherita',
    description: 'Molho de tomate, mussarela, manjericão fresco e azeite extra virgem',
    price: 32.90,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tradicional',
    ingredients: ['Molho de tomate', 'Mussarela', 'Manjericão', 'Azeite']
  },
  {
    id: '2',
    name: 'Pepperoni',
    description: 'Molho de tomate, mussarela e pepperoni importado',
    price: 38.90,
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tradicional',
    ingredients: ['Molho de tomate', 'Mussarela', 'Pepperoni']
  },
  {
    id: '3',
    name: 'Calabresa',
    description: 'Molho de tomate, mussarela, calabresa, cebola e orégano',
    price: 35.90,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tradicional',
    ingredients: ['Molho de tomate', 'Mussarela', 'Calabresa', 'Cebola', 'Orégano']
  },
  {
    id: '4',
    name: 'Quatro Queijos',
    description: 'Molho branco, mussarela, parmesão, gorgonzola e provolone',
    price: 42.90,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'especial',
    ingredients: ['Molho branco', 'Mussarela', 'Parmesão', 'Gorgonzola', 'Provolone']
  },
  {
    id: '5',
    name: 'Portuguesa',
    description: 'Molho de tomate, mussarela, presunto, ovos, cebola, azeitona e orégano',
    price: 39.90,
    image: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'especial',
    ingredients: ['Molho de tomate', 'Mussarela', 'Presunto', 'Ovos', 'Cebola', 'Azeitona']
  },
  {
    id: '6',
    name: 'Frango com Catupiry',
    description: 'Molho de tomate, mussarela, frango desfiado, catupiry e orégano',
    price: 41.90,
    image: 'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'especial',
    ingredients: ['Molho de tomate', 'Mussarela', 'Frango desfiado', 'Catupiry']
  },
  {
    id: '7',
    name: 'Bacon',
    description: 'Molho de tomate, mussarela, bacon crocante e cebola',
    price: 44.90,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'especial',
    ingredients: ['Molho de tomate', 'Mussarela', 'Bacon', 'Cebola']
  },
  {
    id: '8',
    name: 'Vegetariana',
    description: 'Molho de tomate, mussarela, tomate, pimentão, cebola, azeitona e orégano',
    price: 37.90,
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'especial',
    ingredients: ['Molho de tomate', 'Mussarela', 'Tomate', 'Pimentão', 'Cebola', 'Azeitona']
  },
  {
    id: '9',
    name: 'Napolitana',
    description: 'Molho de tomate, mussarela, tomate, parmesão, manjericão e azeite',
    price: 36.90,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tradicional',
    ingredients: ['Molho de tomate', 'Mussarela', 'Tomate', 'Parmesão', 'Manjericão']
  },
  {
    id: '10',
    name: 'Atum',
    description: 'Molho de tomate, mussarela, atum, cebola, azeitona e orégano',
    price: 43.90,
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'especial',
    ingredients: ['Molho de tomate', 'Mussarela', 'Atum', 'Cebola', 'Azeitona']
  },
  {
    id: '11',
    name: 'Cinco Queijos',
    description: 'Molho branco, mussarela, parmesão, gorgonzola, provolone e catupiry',
    price: 48.90,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'premium',
    ingredients: ['Molho branco', 'Mussarela', 'Parmesão', 'Gorgonzola', 'Provolone', 'Catupiry']
  },
  {
    id: '12',
    name: 'Salmão',
    description: 'Molho branco, mussarela, salmão defumado, alcaparras e dill',
    price: 58.90,
    image: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'premium',
    ingredients: ['Molho branco', 'Mussarela', 'Salmão defumado', 'Alcaparras', 'Dill']
  },
  {
    id: '13',
    name: 'Camarão',
    description: 'Molho de tomate, mussarela, camarão, catupiry e temperos especiais',
    price: 54.90,
    image: 'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'premium',
    ingredients: ['Molho de tomate', 'Mussarela', 'Camarão', 'Catupiry']
  },
  {
    id: '14',
    name: 'Parma',
    description: 'Molho de tomate, mussarela, presunto parma, rúcula e parmesão',
    price: 52.90,
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'premium',
    ingredients: ['Molho de tomate', 'Mussarela', 'Presunto Parma', 'Rúcula', 'Parmesão']
  },
  {
    id: '15',
    name: 'Mexicana',
    description: 'Molho de tomate, mussarela, carne moída, pimentão, cebola, pimenta jalapeño',
    price: 46.90,
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'especial',
    ingredients: ['Molho de tomate', 'Mussarela', 'Carne moída', 'Pimentão', 'Jalapeño']
  },
  {
    id: '16',
    name: 'Siciliana',
    description: 'Molho de tomate, mussarela, berinjela, abobrinha, pimentão e manjericão',
    price: 44.90,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'especial',
    ingredients: ['Molho de tomate', 'Mussarela', 'Berinjela', 'Abobrinha', 'Pimentão']
  },
  {
    id: '17',
    name: 'Nordestina',
    description: 'Molho de tomate, mussarela, carne de sol, queijo coalho, cebola roxa',
    price: 49.90,
    image: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'especial',
    ingredients: ['Molho de tomate', 'Mussarela', 'Carne de sol', 'Queijo coalho', 'Cebola roxa']
  },
  {
    id: '18',
    name: 'Paulista',
    description: 'Molho de tomate, mussarela, palmito, ervilha, milho, azeitona',
    price: 41.90,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'especial',
    ingredients: ['Molho de tomate', 'Mussarela', 'Palmito', 'Ervilha', 'Milho', 'Azeitona']
  },
  {
    id: '19',
    name: 'Banana Nevada',
    description: 'Molho doce, mussarela, banana, canela, açúcar e leite condensado',
    price: 36.90,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'doce',
    ingredients: ['Molho doce', 'Mussarela', 'Banana', 'Canela', 'Leite condensado']
  },
  {
    id: '20',
    name: 'Chocolate',
    description: 'Molho de chocolate, mussarela, chocolate granulado e morango',
    price: 38.90,
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'doce',
    ingredients: ['Molho de chocolate', 'Mussarela', 'Chocolate granulado', 'Morango']
  },
  {
    id: '21',
    name: 'Brigadeiro',
    description: 'Molho de chocolate, mussarela, brigadeiro, granulado e leite condensado',
    price: 42.90,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'doce',
    ingredients: ['Molho de chocolate', 'Mussarela', 'Brigadeiro', 'Granulado']
  },
  {
    id: '22',
    name: 'Romeu e Julieta',
    description: 'Molho doce, mussarela, goiabada, queijo mineiro e canela',
    price: 39.90,
    image: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'doce',
    ingredients: ['Molho doce', 'Mussarela', 'Goiabada', 'Queijo mineiro', 'Canela']
  }
];

export const beverages: Beverage[] = [
  {
    id: 'b1',
    name: 'Coca-Cola',
    description: 'Refrigerante tradicional',
    price: 4.50,
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'refrigerante',
    size: '350ml'
  },
  {
    id: 'b2',
    name: 'Coca-Cola 2L',
    description: 'Refrigerante tradicional família',
    price: 8.90,
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'refrigerante',
    size: '2L'
  },
  {
    id: 'b3',
    name: 'Guaraná Antarctica',
    description: 'Refrigerante de guaraná',
    price: 4.50,
    image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'refrigerante',
    size: '350ml'
  },
  {
    id: 'b4',
    name: 'Guaraná Antarctica 2L',
    description: 'Refrigerante de guaraná família',
    price: 8.90,
    image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'refrigerante',
    size: '2L'
  },
  {
    id: 'b5',
    name: 'Fanta Laranja',
    description: 'Refrigerante sabor laranja',
    price: 4.50,
    image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'refrigerante',
    size: '350ml'
  },
  {
    id: 'b6',
    name: 'Fanta Laranja 2L',
    description: 'Refrigerante sabor laranja família',
    price: 8.90,
    image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'refrigerante',
    size: '2L'
  },
  {
    id: 'b7',
    name: 'Sprite',
    description: 'Refrigerante de limão',
    price: 4.50,
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'refrigerante',
    size: '350ml'
  },
  {
    id: 'b8',
    name: 'Sprite 2L',
    description: 'Refrigerante de limão família',
    price: 8.90,
    image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'refrigerante',
    size: '2L'
  },
  {
    id: 'b9',
    name: 'Suco de Laranja',
    description: 'Suco natural de laranja',
    price: 6.90,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'suco',
    size: '500ml'
  },
  {
    id: 'b10',
    name: 'Suco de Uva',
    description: 'Suco natural de uva',
    price: 6.90,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'suco',
    size: '500ml'
  },
  {
    id: 'b11',
    name: 'Água Mineral',
    description: 'Água mineral sem gás',
    price: 3.50,
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'agua',
    size: '500ml'
  },
  {
    id: 'b12',
    name: 'Água com Gás',
    description: 'Água mineral com gás',
    price: 4.00,
    image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'agua',
    size: '500ml'
  }
];

export const additionals: Additional[] = [
  // Queijos
  { id: 'a1', name: 'Mussarela Extra', price: 3.50, category: 'queijo' },
  { id: 'a2', name: 'Catupiry', price: 4.00, category: 'queijo' },
  { id: 'a3', name: 'Parmesão', price: 4.50, category: 'queijo' },
  { id: 'a4', name: 'Gorgonzola', price: 5.00, category: 'queijo' },
  { id: 'a5', name: 'Provolone', price: 4.50, category: 'queijo' },
  { id: 'a6', name: 'Cheddar', price: 4.00, category: 'queijo' },
  
  // Carnes
  { id: 'a7', name: 'Pepperoni', price: 5.00, category: 'carne' },
  { id: 'a8', name: 'Calabresa', price: 4.50, category: 'carne' },
  { id: 'a9', name: 'Bacon', price: 5.50, category: 'carne' },
  { id: 'a10', name: 'Presunto', price: 4.00, category: 'carne' },
  { id: 'a11', name: 'Frango Desfiado', price: 4.50, category: 'carne' },
  { id: 'a12', name: 'Carne Moída', price: 5.00, category: 'carne' },
  { id: 'a13', name: 'Lombo Canadense', price: 6.00, category: 'carne' },
  
  // Vegetais
  { id: 'a14', name: 'Tomate', price: 2.00, category: 'vegetal' },
  { id: 'a15', name: 'Cebola', price: 1.50, category: 'vegetal' },
  { id: 'a16', name: 'Pimentão', price: 2.50, category: 'vegetal' },
  { id: 'a17', name: 'Azeitona Preta', price: 3.00, category: 'vegetal' },
  { id: 'a18', name: 'Azeitona Verde', price: 3.00, category: 'vegetal' },
  { id: 'a19', name: 'Champignon', price: 4.00, category: 'vegetal' },
  { id: 'a20', name: 'Palmito', price: 4.50, category: 'vegetal' },
  { id: 'a21', name: 'Milho', price: 2.50, category: 'vegetal' },
  { id: 'a22', name: 'Ervilha', price: 2.50, category: 'vegetal' },
  { id: 'a23', name: 'Rúcula', price: 3.00, category: 'vegetal' },
  
  // Temperos
  { id: 'a24', name: 'Orégano', price: 1.00, category: 'tempero' },
  { id: 'a25', name: 'Manjericão', price: 2.00, category: 'tempero' },
  { id: 'a26', name: 'Alho', price: 1.50, category: 'tempero' },
  { id: 'a27', name: 'Pimenta Calabresa', price: 1.50, category: 'tempero' }
];

export const pizzaSizes = [
  { id: 'pequena', name: 'Pequena', description: '25cm - 8 fatias', multiplier: 0.8 },
  { id: 'média', name: 'Média', description: '30cm - 12 fatias', multiplier: 1.0 },
  { id: 'grande', name: 'Grande', description: '35cm - 16 fatias', multiplier: 1.3 }
];