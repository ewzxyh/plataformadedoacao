import React, { useState, useEffect } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { useUser } from '../../services/UserContext'; 

interface LoginFormProps {
    setUsername: React.Dispatch<React.SetStateAction<string | null>>;
}

function LoginForm({ setUsername: setGlobalUsername }: LoginFormProps) {
    const [username, setUsernameLocal] = useState(''); // Renomeado para evitar conflitos
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const userContext = useUser(); // Use o contexto de usuário
    const navigate = useNavigate(); // Instancia useNavigate

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const user = await login(username, password);
            if (user) {
                setLoginSuccess(true);
                setGlobalUsername(user.username); // Atualiza o estado global ou contexto com o nome do usuário
                if (userContext) {
                    userContext.loginUser(user); // Garanta que userContext não é null
                    console.log(userContext?.user);
                    console.log(user);
                }
                setTimeout(() => {
                    navigate('/'); // Redireciona para a página inicial
                }, 2000);
            } else {
                setLoginError('Usuário ou senha inválidos.');
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setLoginError('Ocorreu um erro ao tentar fazer o login.');
        }
    };

    useEffect(() => {
        console.log(userContext?.user);
    }, [userContext?.user]);

    return (
        <form onSubmit={handleLogin} className={styles.loginForm}>
            <h1 className={styles.textLoginForm}>
            Login
            </h1>
            <input
                type="text"
                placeholder="Nome de Usuário"
                value={username}
                onChange={(e) => setUsernameLocal(e.target.value)}
                className={styles.inputField}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputField}
            />
            <button type="submit" className={styles.submitButton}>Login</button>
            <p className={styles.textRegister1}>Não possui uma conta?
            <a className={styles.textRegister2} href="/register"> Registre-se</a>
            </p>
            {loginError && <p className={styles.errorMessage}>{loginError}</p>}
            {loginSuccess && <p className={styles.successMessage}>Login bem-sucedido! Redirecionando...</p>}
        </form>
    );
}

export default LoginForm;
