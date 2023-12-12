import React, { useEffect, useState } from 'react';
import styles from './Loja.module.css';
import LojaLayout from '../layout/LojaLayout';
import MiniItemCard from '../itens/MiniItemCard';
import LojaHero from '../layout/LojaHero';

const Loja = () => {
  return (
    <div className={styles['loja']}>
      <LojaHero />
      <MiniItemCard />
      <LojaLayout />
    </div>
  );
}

export default Loja;
