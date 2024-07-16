import React, { createContext, ReactNode, useEffect, useState } from "react";
const filePrefixAddress = import.meta.env.VITE_BE_ADDRESS + "api/static/";
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
    if (data) {
      data.avatar = data.avatar ? `${filePrefixAddress + data.avatar}` : null;
    }
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
