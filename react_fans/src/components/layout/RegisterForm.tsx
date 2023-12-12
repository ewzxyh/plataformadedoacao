import React, { useState } from 'react';
import { register } from '../../services/authService';
import styles from './RegisterForm.module.css';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        cpf: '',
        cep: '',
        phone: '',
        password: '',
        confirmPassword: '',
        acceptsMarketing: false,
    });
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const navigate = useNavigate(); // Instancia useNavigate

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { password, confirmPassword, ...userInfo } = formData;

        if (password !== confirmPassword) {
            setRegisterError("As senhas não coincidem.");
            return;
        }

        try {
            const success = await register({ ...userInfo, password });
            if (success) {
                setRegisterSuccess(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    cpf: '',
                    cep: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                    acceptsMarketing: false,
                });
                setTimeout(() => {
                    navigate('/login'); // Redireciona para a página inicial
                }, 2000);
            } else {
                setRegisterError('Falha ao registrar o usuário.');
            }
        } catch (error) {
            console.error("Erro ao registrar:", error);
            setRegisterError('Ocorreu um erro ao tentar registrar. Por favor, tente novamente.');
        }
    };

    return (
        <form onSubmit={handleRegister} className={styles.registerForm}>
            <h1 className={styles.textRegisterForm}>
                Registrar-se
            </h1>
            <input
                name="firstName"
                type="text"
                placeholder="Primeiro Nome"
                value={formData.firstName}
                onChange={handleInputChange}
            />
            <input
                name="lastName"
                type="text"
                placeholder="Último Nome"
                value={formData.lastName}
                onChange={handleInputChange}
            />
            <input
                name="username"
                type="text"
                placeholder="Nome de Usuário"
                value={formData.username}
                onChange={handleInputChange}
            />
            <input
                name="email"
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
            />
            <input
                name="cpf"
                type="text"
                placeholder="CPF"
                value={formData.cpf}
                onChange={handleInputChange}
            />
            <input
                name="cep"
                type="text"
                placeholder="CEP"
                value={formData.cep}
                onChange={handleInputChange}
            />
            <input
                name="phone"
                type="tel"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleInputChange}
            />
            <input
                name="password"
                type="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleInputChange}
            />
            <input
                name="confirmPassword"
                type="password"
                placeholder="Confirme a senha"
                value={formData.confirmPassword}
                onChange={handleInputChange}
            />
            <label className={styles.checkboxLabel}>
                <input
                    name="acceptsMarketing"
                    type="checkbox"
                    checked={formData.acceptsMarketing}
                    onChange={handleInputChange}
                    className={styles.checkboxInput}
                />
                Aceita receber e-mails de marketing?
            </label>
            <button type="submit">Registrar-se</button>
            {registerError && <p className={styles.error}>{registerError}</p>}
            {registerSuccess && <p className={styles.success}>Registro realizado com sucesso!</p>}
        </form>
    );
}

export default RegisterForm;
