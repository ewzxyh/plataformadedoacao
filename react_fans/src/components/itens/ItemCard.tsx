import React from 'react';
import styles from './ItemCard.module.css';

interface Product {
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  estoque: number;
  imagem: string;
}

interface ItemCardProps {
  product: Product;
}


const ItemCard: React.FC<ItemCardProps> = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className={`card ${styles['item-card']}`}>
        <img src={product.imagem} className={styles['card-img']} alt={product.nome} />
        <div className="card-img-overlay">
          <h5 className="card-title text-white">{product.nome}</h5>
          <p className="card-text text-white">Preço: ${product.preco.toFixed(2)}</p>
          <p className="card-text text-white">Descrição: {product.descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
