import React from 'react';
import styles from './TrustAndSafety.module.css';
import verify from '../../img/verify.svg';
import rightArrow from '../../img/rightArrow.svg';

function TrustAndSafety() {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <img src={verify} alt="Verify" />
            </div>
            <div>
                <h2 className={styles.title}>Confiança e Segurança</h2>
                <h1 className={styles.heading}>Estamos com você.</h1>
                <p className={styles.content}>
                    Com uma equipe global dedicada à confiança e segurança, gerenciamos com sucesso
                    campanhas no mundo todo há mais de uma década. Não se preocupe com nada, cuidamos
                    de tudo.
                </p>
                <a href="/" className={styles.link}>Explorar Confiança e Segurança
                    <img src={rightArrow} alt="Right Arrow" className={styles.arrowIcon} />
                </a>
            </div>
        </div>
    );
}

export default TrustAndSafety;
