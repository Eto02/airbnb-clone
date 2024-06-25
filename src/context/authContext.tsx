import React, { createContext, ReactNode, useEffect, useState } from "react";

export interface AuthContextType {
  currentUser: User | null;
  updateUser: (data: User | null) => void;
}
export interface User {
  avatar: null | string;
  createdAt: string;
  email: string;
  id: string;
  username: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser: string | null = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const updateUser = (data: User | null): void => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
