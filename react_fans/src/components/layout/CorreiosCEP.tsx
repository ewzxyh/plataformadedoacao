import React, { useState } from 'react';
import axios from 'axios';
import styles from './CorreiosCEP.module.css';

interface Endereco {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

function BuscaCEP() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState<Endereco | null>(null);

    const buscarCep = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setEndereco(response.data);
        } catch (error) {
            console.error('Erro na busca do CEP:', error);
            setEndereco(null);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Vamos começar a jornada para sua campanha</h1>
            <input 
                type="text" 
                value={cep} 
                onChange={(e) => setCep(e.target.value)} 
                placeholder="Digite o CEP"
                className={styles.input}
            />
            <button onClick={buscarCep} className={styles.button}>Buscar</button>

            {endereco && (
                <div className={styles.resultado}>
                    <p><strong>Endereço:</strong></p>
                    <p className={styles.text}>Rua: {endereco.logradouro}</p>
                    <p className={styles.text}>Bairro: {endereco.bairro}</p>
                    <p className={styles.text}>Cidade: {endereco.localidade}</p>
                    <p className={styles.text}>Estado: {endereco.uf}</p>
                </div>
            )}
        </div>
    );
}

export default BuscaCEP;
