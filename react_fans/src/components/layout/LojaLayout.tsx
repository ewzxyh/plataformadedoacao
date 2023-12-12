import React, { useEffect, useState } from 'react';
import styles from './LojaLayout.module.css';
import ItemCard from '../itens/ItemCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Product = {
    nome: string;
    categoria: string;
    preco: number;
    descricao: string;
    estoque: number;
    imagem: string;
};

type Categories = {
    [category: string]: Product[];
};

const LojaLayout = () => {
    const [categories, setCategories] = useState<Categories>({});

    useEffect(() => {
        fetch('http://localhost:8080/produtos')
            .then(response => response.json())
            .then(data => {
                const groupedByCategory = data.reduce((acc: Categories, product: Product) => {
                    const category = product.categoria;
                    if (!acc[category]) {
                        acc[category] = [];
                    }
                    acc[category].push(product);
                    return acc;
                }, {} as Categories);
                setCategories(groupedByCategory);
            });
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        arrows: true,
    };

    const categoryTitles: { [key: string]: string[] } = {
        'Mac': ['Explore o universo Mac. ', 'Inovação em cada detalhe.'],
        'iPad': ['Mais versátil do que nunca. ', 'Conheça o novo iPad.'],
        'iPhone': ['Diga olá ao futuro. ', 'iPhone revolucionando a tecnologia.'],
        'Watch': ['O relógio do futuro. ', 'Saúde e conexão como nunca antes.'],
        'Airpods': ['Música para seus ouvidos. ', 'AirPods, liberdade sem fios.'],
        'TV': ['Entretenimento em alta definição. ', 'Apple TV, para os amantes de boa imagem.'],
        'Casa': ['Torne sua casa inteligente. ', 'Automação com a qualidade Apple.'],
        'Acessórios': ['Complemente sua experiência. ', 'Acessórios que potencializam seu Apple.'],
    };

    return (
        <div className={styles.storeLayout}>
            {Object.entries(categories).map(([category, products]) => (
                <div key={category} className={styles.categorySection}>
                    <h2>
                        <span className={styles.firstHalf}>{categoryTitles[category][0]}</span>
                        <span className={styles.secondHalf}>{categoryTitles[category][1]}</span>
                    </h2>
                    <Slider {...settings}>
                        {products.map((product) => (
                            <ItemCard key={product.nome} product={product} />
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    );
};

export default LojaLayout;