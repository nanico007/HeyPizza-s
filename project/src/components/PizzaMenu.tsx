import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { pizzas } from '../data/pizzas';
import PizzaCard from './PizzaCard';

const PizzaMenu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Todas', count: pizzas.length },
    { id: 'tradicional', name: 'Tradicionais', count: pizzas.filter(p => p.category === 'tradicional').length },
    { id: 'especial', name: 'Especiais', count: pizzas.filter(p => p.category === 'especial').length },
    { id: 'premium', name: 'Premium', count: pizzas.filter(p => p.category === 'premium').length },
    { id: 'doce', name: 'Doces', count: pizzas.filter(p => p.category === 'doce').length }
  ];

  const filteredPizzas = pizzas.filter(pizza => {
    const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pizza.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || pizza.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Nosso Cardápio</h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto">
            Mais de 20 sabores únicos preparados com ingredientes frescos e receitas tradicionais
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar pizzas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-amber-600/30 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-gray-400"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 border ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 border-amber-500 shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border-amber-600/30'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPizzas.map(pizza => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>

        {filteredPizzas.length === 0 && (
          <div className="text-center py-16">
            <Filter className="h-20 w-20 text-gray-600 mx-auto mb-6" />
            <p className="text-gray-400 text-lg">Nenhuma pizza encontrada</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PizzaMenu;