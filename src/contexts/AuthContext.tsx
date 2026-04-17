// src/contexts/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. Definir a interface do usuário
export interface User {
  name: string;
  email: string;
}

// 2. Definir a interface do contexto (métodos e estado)
interface AuthContextData {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (name: string, email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

// 3. Criar o contexto com um valor inicial (pode ser undefined, mas vamos tipar)
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// 4. Tipar as props do Provider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('@LinuxHub:user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    // Simulação – substitua pela sua API real
    if (email === 'teste@teste.com' && password === '123456') {
      const userData: User = { name: 'Usuário Teste', email };
      setUser(userData);
      await AsyncStorage.setItem('@LinuxHub:user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signUp = async (name: string, email: string, password: string): Promise<boolean> => {
    const userData: User = { name, email };
    setUser(userData);
    await AsyncStorage.setItem('@LinuxHub:user', JSON.stringify(userData));
    return true;
  };

  const signOut = async (): Promise<void> => {
    setUser(null);
    await AsyncStorage.removeItem('@LinuxHub:user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};