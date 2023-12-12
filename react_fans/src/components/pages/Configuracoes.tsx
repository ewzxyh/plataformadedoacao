// Importe React e o componente ConfiguracoesForm
import React from 'react';
import ConfiguracoesForm from '../layout/ConfiguracoesForm';

interface ConfiguracoesProps {
    username: string | null;
}

const Configuracoes = ({ username }: ConfiguracoesProps) => {
    return (
        <div>
            <ConfiguracoesForm username={username} />
        </div>
    );
}

export default Configuracoes;
