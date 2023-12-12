import React, { useState } from 'react';
import Input from '../form/Input'; // Importe o componente Input
import SubmitButton from '../form/SubmitButton'; // Importe o componente SubmitButton
import styles from './Cadastro.module.css';

function Cadastro() {
  const [cadastros, setCadastros] = useState([] as { id: number, login: string, senha: string }[]);
  const [novoCadastro, setNovoCadastro] = useState({ login: '', senha: '' } as { login: string, senha: string });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNovoCadastro({ ...novoCadastro, [name]: value });
  };

  const handleSubmit = () => {
    fetch('http://localhost:8080/cadastros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoCadastro),
    })
      .then(() => {
        // Atualize a lista de cadastros após o cadastro
        setCadastros([...cadastros, novoCadastro]);
        setNovoCadastro({ login: '', senha: '' });
      });
  };

  return (
    <div className={styles.app}>
      <h1>Cadastro de Cliente</h1>
      <form>
        <Input
          type="text"
          name="login"
          placeholder="Login"
          handleOnChange={handleInputChange}
          value={novoCadastro.login}
        />
        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          handleOnChange={handleInputChange}
          value={novoCadastro.senha}
        />
        <SubmitButton text="Cadastrar" onClick={handleSubmit} />
      </form>
      <ul>
        {cadastros.map((cadastro) => (
          <li key={cadastro.id}>{cadastro.login}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cadastro;