import React from 'react';
import Slider from 'react-slick';
import styles from './MiniItemCard.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mac from '../../img/Mac.png';
import iPhone from '../../img/iPhone.png';
import iPad from '../../img/iPad.png';
import AppleWatch from '../../img/AppleWatch.png';
import AirPods from '../../img/AirPods.png';
import AirTag from '../../img/AirTag.png';
import AppleTV4K from '../../img/AppleTV4K.png';
import Acessorios from '../../img/Acessorios.png';

const MiniItemCard: React.FC = () => {
    const categories = ['Mac', 'iPhone', 'iPad', 'Apple Watch', 'AirPods', 'AirTag', 'Apple TV 4K', 'Acessórios'];
    const images = [Mac, iPhone, iPad, AppleWatch, AirPods, AirTag, AppleTV4K, Acessorios];
    const categoryClasses: { [key: string]: string } = {
        'Mac': styles.macClass,
        'iPhone': styles.iphoneClass,
        'iPad': styles.ipadClass,
        'Apple Watch': styles.appleWatchClass,
        'AirPods': styles.airPodsClass,
        'AirTag': styles.airTagClass,
        'Apple TV 4K': styles.appleTV4KClass,
        'Acessórios': styles.acessoriosClass,
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2
    };

    return (
        <Slider {...settings} className='overflow-hidden'>
            {categories.map((category, index) => (
                <div key={index} className={styles.card}>
                    <img src={images[index]} alt={category} className={styles.productImage} />
                    <p className={`${styles.productName} ${categoryClasses[category]}`}>{category}</p>
                </div>
            ))}
        </Slider>
    );
};

export default MiniItemCard;