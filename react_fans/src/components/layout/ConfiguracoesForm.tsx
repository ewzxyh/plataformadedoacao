import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ConfiguracoesForm.module.css';
import Mensagem from './Mensagem';

interface ConfiguracoesFormProps {
  username: string | null;
}

interface UserFormData {
  id: number;
  username: string;
  email: string;
  password: string;
  currentPassword: string;
  confirmPassword: string;
}

const ConfiguracoesForm = ({ username }: ConfiguracoesFormProps) => {
  const [formData, setFormData] = useState<UserFormData>({ id: 0, username: '', email: '', password: '', currentPassword: '', confirmPassword: '' });
  const [isAwareOfChanges, setIsAwareOfChanges] = useState(false);
  const [userData, setUserData] = useState({ email: '', username: '', password: '' });
  const [mensagem, setMensagem] = useState<{ type: string; msg?: string }>({ type: '', msg: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isFormDirty, setIsFormDirty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      fetch(`http://localhost:8080/usuarios?username=${username}`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const userData = data[0];
            setUserData(userData);
            setFormData({ ...formData, email: userData.email, username: userData.username, id: userData.id });
          }
        })
        .catch(error => {
          console.error('Erro ao carregar dados do usuário:', error);
          setMensagem({ type: 'erro', msg: 'Erro ao carregar dados do usuário.' });
        });
    }
  }, [username]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isFormDirty) {
        e.preventDefault();
        e.returnValue = "Você tem alterações não salvas. Tem certeza de que deseja sair?";
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isFormDirty]);

  const validatePassword = (password: string) => {
    const hasLength = password.length >= 8;
    const hasNumbers = /\d/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasLength && hasNumbers && hasUpper && hasLower && hasSpecial;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormDirty(true);
    if (e.target.name === 'isAwareOfChanges') {
      setIsAwareOfChanges(e.target.checked);
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };


  const currentPasswordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validatePassword(formData.password)) {
      setMensagem({ type: 'erro', msg: 'A senha deve ter pelo menos 8 caracteres, incluir números, letras maiúsculas e minúsculas, e caracteres especiais (como !@#$%^&*).' });
      setIsLoading(false);
      return;
    }

    if (currentPasswordRef.current?.value === formData.password) {
      setMensagem({ type: 'erro', msg: 'A nova senha não pode ser igual à senha atual.' });
      setIsLoading(false);
      return;
    }

    if (!currentPasswordRef.current?.value) {
      setMensagem({ type: 'erro', msg: 'Por favor, insira a senha atual.' });
      setIsLoading(false);
      return;
    }

    if (!formData.password) {
      setMensagem({ type: 'erro', msg: 'Por favor, insira uma nova senha.' });
      setIsLoading(false);
      return;
    }

    if (!formData.confirmPassword) {
      setMensagem({ type: 'erro', msg: 'Por favor, confirme a nova senha.' });
      setIsLoading(false);
      return;
    }

    if (!validatePassword(formData.password)) {
      setMensagem({ type: 'erro', msg: 'A nova senha não atende aos critérios de segurança.' });
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMensagem({ type: 'erro', msg: 'A confirmação da senha não corresponde à nova senha.' });
      setIsLoading(false);
      return;
    }

    if (currentPasswordRef.current?.value !== userData.password) {
      setMensagem({ type: 'erro', msg: 'Senha atual incorreta.' });
      setIsLoading(false);
      return;
    }

    if (!isAwareOfChanges) {
      setMensagem({ type: 'erro', msg: 'Por favor, confirme que está ciente das mudanças.' });
      setIsLoading(false);
      return;
    }

    fetch(`http://localhost:8080/usuarios/${formData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao atualizar os dados');
        }
        return response.json();
      })
      .then(data => {
        setMensagem({ type: 'sucesso', msg: 'Dados atualizados com sucesso!' });
        setUserData({ ...userData, password: formData.password });
        setFormData({ ...formData, currentPassword: '', confirmPassword: '' });
        setTimeout(() => setMensagem({ type: '', msg: '' }), 5000);
        setIsFormDirty(false);
        setTimeout(() => navigate(0), 2000);
      })
      .catch(error => {
        setMensagem({ type: 'erro', msg: 'Erro ao atualizar os dados.' });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.configForm}>
      <h2>Configurações</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Nome de Usuário:</label>
          <span className={styles.nonEditableField}>
            {userData.username}
          </span>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail:</label>
          <span className={styles.nonEditableField}>
            {userData.email}
          </span>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="currentPassword">Senha Atual:</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            placeholder='Senha atual'
            ref={currentPasswordRef}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Nova Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder='Nova senha'
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirme a Nova Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder='Confirme a nova senha'
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            <input
              type="checkbox"
              name="isAwareOfChanges"
              checked={isAwareOfChanges}
              onChange={handleChange}
            />
            Estou ciente das mudanças
          </label>
        </div>
        {mensagem.msg && <Mensagem type={mensagem.type} msg={mensagem.msg} />}
        <button type="submit" className={styles.updateButton} disabled={isLoading}>
          {isLoading ? 'Atualizando...' : 'Atualizar'}
        </button>
      </form>
    </div>
  );
}

export default ConfiguracoesForm;
