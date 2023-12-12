const BASE_URL = 'http://localhost:8080';

export const login = async (username: string, password: string) => {
    try {
        const response = await fetch(`${BASE_URL}/usuarios`);
        const users = await response.json();
        
        const user = users.find((u: any) => u.username === username && u.password === password);
        
        if (user) {
            // Retornar as informações do usuário (ou um indicador de sucesso)
            return user;
        } else {
            // Retornar null ou lançar um erro se o login falhar
            return null;
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
    }
};

export const register = async (userInfo: Record<string, any>) => {
    try {
        const response = await fetch(`${BASE_URL}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });

        if (response.ok) {
            // Retorna true para indicar sucesso
            return true;
        } else {
            // Retorna false ou lança um erro se o registro falhar
            return false;
        }
    } catch (error) {
        console.error("Erro ao registrar:", error);
        throw error;
    }
};
