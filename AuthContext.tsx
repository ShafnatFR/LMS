import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Role } from './types';

interface AuthContextType {
  user: User | null;
  login: (username: string, role: Role) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Check localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('school_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username: string, role: Role) => {
    // In a real app, this would validate with a backend
    const newUser: User = {
      id: Date.now().toString(),
      username,
      name: username === 'admin' ? 'Administrator' : username === 'guru' ? 'Budi Santoso, S.Pd' : 'Ahmad Siswa',
      role: role
    };

    setUser(newUser);
    localStorage.setItem('school_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('school_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};