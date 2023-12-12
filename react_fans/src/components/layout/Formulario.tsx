import React, { useState } from 'react';
import SubmitButton from '../form/SubmitButton';
import styles from './Formulario.module.css';
import Input from '../form/Input';
import Mensagem from "./Mensagem";

interface FormData {
  primeiroNome: string;
  segundoNome: string;
  endereco: string;
  email: string;
  telefone: string;
  receberAtualizacoes: boolean;
}

const Formulario: React.FC = () => {
  const [msg, setMsg] = useState("");

  const [formData, setFormData] = useState<FormData>({
    primeiroNome: '',
    segundoNome: '',
    endereco: '',
    email: '',
    telefone: '',
    receberAtualizacoes: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica para enviar os dados do formulário para o servidor
    fetch('http://localhost:8080/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setMsg('Dados enviados com sucesso');
        setTimeout(() => {
          setMsg(''); 
        }, 3000);
      })
      .catch((erro) => setMsg(erro.message));
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <input
        type="text"
        name="primeiroNome"
        placeholder="Primeiro Nome"
        value={formData.primeiroNome}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <input
        type="text"
        name="segundoNome"
        placeholder="Segundo Nome"
        value={formData.segundoNome}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={formData.endereco}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={formData.telefone}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <Input
        type="checkbox"
        text="Receba atualizações sobre o Apple Vision Pro, incluindo notícias sobre disponibilidade e promoções."
        name="receberAtualizacoes"
        handleOnChange={handleInputChange}
        value={formData.receberAtualizacoes ? 'true' : 'false'}
      />
      <SubmitButton text="Enviar" className={styles.submitButton} />
      {msg && <Mensagem type="sucesso" msg={msg} />}
    </form>
  );
};

export default Formulario;
