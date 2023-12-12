import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loginUser: (userData: User) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
    children: ReactNode; // Adicione esta tipagem para 'children'
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    const loginUser = (userData: User) => {
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, setUser, loginUser }}>
            {children}
        </UserContext.Provider>
    );
};
