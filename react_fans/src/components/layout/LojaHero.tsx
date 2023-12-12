import React from 'react';
import styles from './LojaHero.module.css';
import chat from '../../img/chat.jpeg';
import support from '../../img/support.png';

const LojaHero = () => {
    return (
        <div className={styles.heroLayout}>
            <h1 className={styles.text1Hero}>
                <span className={styles.textLoja}>Loja.</span> <span className={styles.text2Hero}>O melhor jeito de comprar o que você ama.</span>
            </h1>
            <div className={styles.heroLayout2}>
                <div className={styles.column1Hero}>
                    <img src={chat} alt="Imagem redonda pequena" className={styles.img1Hero} />
                    <a href="link_para_especialista" target="_blank" rel="noopener noreferrer" className={styles.semDecoracao}>
                        Precisa de ajuda para comprar?
                        <a href="seu_link_para_especialista" className={styles.linkEspecialista}>Fale com um especialista</a>
                    </a>
                </div>
                <div className={styles.column2Hero}>
                    <img src={support} alt="Imagem redonda pequena" className={styles.img2Hero} />
                    <a href="link_para_especialista" target="_blank" rel="noopener noreferrer" className={styles.semDecoracao}>
                        Visite uma Apple Store.<br></br>
                        <a href="seu_link_para_especialista" className={styles.linkEspecialista}>Procure uma loja perto de você.</a>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LojaHero;