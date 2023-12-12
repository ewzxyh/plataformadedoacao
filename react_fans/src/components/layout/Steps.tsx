import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Steps.module.css';

function Steps() {
    return (
        <div className={`container ${styles.container}`}>
            <p className={styles.description}>O que esperar</p>
            <h2 className={styles.title}>Fazer uma campanha no<br></br>OnlyGivers leva apenas alguns<br></br>minutos</h2>
            <div className={`row ${styles.row}`}>
                <div className={`col ${styles.col}`}>
                    <div className={`card ${styles.card}`}>
                        <div className={`card-body ${styles.cardBody}`}>
                            <h3 className={`card-title ${styles.cardTitle}`}><div className={styles.stepNumber}>1</div> Comece com o básico</h3>
                            <p className={`card-text ${styles.cardText}`}>Comece apenas com o seu nome e localização.</p>
                        </div>
                    </div>
                </div>
                <div className={`col ${styles.col}`}>
                    <div className={`card ${styles.card}`}>
                        <div className={`card-body ${styles.cardBody}`}>
                            <h3 className={`card-title ${styles.cardTitle}`}><div className={styles.stepNumber}>2</div> Conte sua história</h3>
                            <p className={`card-text ${styles.cardText}`}>Nós o guiaremos com dicas ao longo do caminho.</p>
                        </div>
                    </div>
                </div>
                <div className={`col ${styles.col}`}>
                    <div className={`card ${styles.card}`}>
                        <div className={`card-body ${styles.cardBody}`}>
                            <h3 className={`card-title ${styles.cardTitle}`}><div className={styles.stepNumber}>3</div> Compartilhe facilmente</h3>
                            <p className={`card-text ${styles.cardText}`}>Há pessoas por aí que querem te ajudar, compartilhe com qualquer um.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Steps;