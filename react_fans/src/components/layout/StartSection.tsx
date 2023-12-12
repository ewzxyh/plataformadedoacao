import React from 'react';
import styles from './StartSection.module.css';
import flor from '../../img/flor.png';

function StartSection() {
    return (
        <div className={`${styles.startSection} ${styles.flexContainer}`}>
            <div className={styles.textContent}>
                <h2>Pronto para começar?</h2>
                <p>Junte-se a outras milhares de pessoas hoje mesmo.</p>
                <div className={styles.buttons}>
                    <button className={`${styles.button} ${styles.greenButton}`}>Começar um OnlyGivers</button>
                    <button className={`${styles.button} ${styles.outlineButton}`}>Como funciona</button>
                </div>
            </div>
            <div className={styles.imageContent}>
                <img src={flor} alt="Start" />
            </div>
        </div>
    );
}

export default StartSection;
