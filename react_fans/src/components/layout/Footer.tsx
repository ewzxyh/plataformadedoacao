import React from 'react';
import styles from './Footer.module.css';
import logo from '../../img/logo.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoSection}>
          <img src={logo} alt="OnlyGivers Logo" className={styles.logo} />
          <span className={styles.brandName}>OnlyGivers</span>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linksColumn}>
            <h4>Arrecade fundos para</h4>
            <a href="/">Medicina</a>
            <a href="/">Emergência</a>
            <a href="/">Memorial</a>
            <a href="/">Educação</a>
          </div>
          <div className={styles.linksColumn}>
            <h4>Saiba mais</h4>
            <a href="/">Como o GoFundMe funciona</a>
            <a href="/">Perguntas frequentes</a>
            <a href="/">Histórias de sucesso</a>
            <a href="/">Países em que operamos</a>
            <a href="/">Preços</a>
          </div>
          <div className={styles.linksColumn}>
            <h4>Recursos</h4>
            <a href="/">Central de Ajuda</a>
            <a href="/">Blog</a>
            <a href="/">Centro de imprensa</a>
            <a href="/">Carreiras</a>
            <a href="/">Sobre</a>
            <a href="/">Mais recursos</a>
          </div>
        </div>
      </div>
      <div className={styles.footerEnd}>
        © 2023 OnlyGivers | 
        <a href="/">Termos</a> | 
        <a href="/">Aviso de Privacidade</a> | 
        <a href="/">Informações de caráter legal</a>
      </div>
    </footer>
  );
}

export default Footer;
