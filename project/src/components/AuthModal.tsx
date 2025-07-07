import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone, MapPin } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const AuthModal: React.FC = () => {
  const { state, dispatch } = useApp();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      zipCode: ''
    }
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    const user = {
      id: '1',
      name: 'João Silva',
      email: loginData.email,
      phone: '(11) 99999-9999',
      address: {
        street: 'Rua das Flores',
        number: '123',
        complement: 'Apto 45',
        neighborhood: 'Centro',
        city: 'São Paulo',
        zipCode: '01234-567'
      }
    };
    dispatch({ type: 'SET_USER', payload: user });
    dispatch({ type: 'TOGGLE_LOGIN' });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup
    const user = {
      id: '2',
      name: signupData.name,
      email: signupData.email,
      phone: signupData.phone,
      address: signupData.address
    };
    dispatch({ type: 'SET_USER', payload: user });
    dispatch({ type: 'TOGGLE_SIGNUP' });
  };

  if (!state.isLoginOpen && !state.isSignupOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-amber-600/30 shadow-2xl">
        <div className="p-6 border-b border-amber-600/30">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              {state.isLoginOpen ? 'Entrar' : 'Criar Conta'}
            </h2>
            <button
              onClick={() => {
                dispatch({ type: 'TOGGLE_LOGIN' });
                dispatch({ type: 'TOGGLE_SIGNUP' });
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {state.isLoginOpen ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg"
              >
                Entrar
              </button>

              <p className="text-center text-gray-400">
                Não tem conta?{' '}
                <button
                  type="button"
                  onClick={() => {
                    dispatch({ type: 'TOGGLE_LOGIN' });
                    dispatch({ type: 'TOGGLE_SIGNUP' });
                  }}
                  className="text-amber-400 hover:text-amber-300 font-medium"
                >
                  Criar conta
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={signupData.name}
                    onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                    placeholder="João Silva"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Telefone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    value={signupData.phone}
                    onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-2" />
                  Endereço de Entrega
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      value={signupData.address.street}
                      onChange={(e) => setSignupData({
                        ...signupData,
                        address: {...signupData.address, street: e.target.value}
                      })}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                      placeholder="Rua"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={signupData.address.number}
                      onChange={(e) => setSignupData({
                        ...signupData,
                        address: {...signupData.address, number: e.target.value}
                      })}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                      placeholder="Número"
                      required
                    />
                  </div>
                </div>
                
                <input
                  type="text"
                  value={signupData.address.complement}
                  onChange={(e) => setSignupData({
                    ...signupData,
                    address: {...signupData.address, complement: e.target.value}
                  })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                  placeholder="Complemento (opcional)"
                />
                
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={signupData.address.neighborhood}
                    onChange={(e) => setSignupData({
                      ...signupData,
                      address: {...signupData.address, neighborhood: e.target.value}
                    })}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                    placeholder="Bairro"
                    required
                  />
                  <input
                    type="text"
                    value={signupData.address.city}
                    onChange={(e) => setSignupData({
                      ...signupData,
                      address: {...signupData.address, city: e.target.value}
                    })}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                    placeholder="Cidade"
                    required
                  />
                </div>
                
                <input
                  type="text"
                  value={signupData.address.zipCode}
                  onChange={(e) => setSignupData({
                    ...signupData,
                    address: {...signupData.address, zipCode: e.target.value}
                  })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white"
                  placeholder="CEP"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg"
              >
                Criar Conta
              </button>

              <p className="text-center text-gray-400">
                Já tem conta?{' '}
                <button
                  type="button"
                  onClick={() => {
                    dispatch({ type: 'TOGGLE_SIGNUP' });
                    dispatch({ type: 'TOGGLE_LOGIN' });
                  }}
                  className="text-amber-400 hover:text-amber-300 font-medium"
                >
                  Entrar
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;