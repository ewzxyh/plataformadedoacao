import React, { createContext, useState, useContext, useEffect } from 'react';

// Define o tipo para o usuário
interface User {
    id: number;
    username: string;
    email: string;
    // Adicione quaisquer outras propriedades que você precisa
}

// Define o tipo para o contexto do usuário
interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loginUser: (user: User) => void;
}

// Cria o contexto do usuário com valores padrão
const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
    loginUser: () => {},
});

// Cria o provedor de usuário
const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const loginUser = (userData: User) => {
        setUser(userData);
        console.log('user:', user);
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser, loginUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Cria um hook personalizado para usar o contexto do usuário
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
