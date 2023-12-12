import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ImpactCards.module.css';

import yourselfImg from '../../img/yourself.png';
import familyImg from '../../img/family.png';
import communityImg from '../../img/community.png';
import circleArrow from '../../img/circleArrow.svg';

function ImpactCards() {
    return (
        <div className={`container ${styles.container}`}>
            <div className="row align-items-start"> 
                <div className={`col text-left ${styles.text}`}>
                    <h3 className={styles.title}>Produza impacto</h3>
                    <h2 className={styles.subtitle}>Campanha para...</h2>
                </div>
                {cardsData.map((card, index) => (
                    <div className="col-md-3" key={index}>
                        <a href={card.link} className={styles.cardLink}>
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body ${styles.cardBody}`}>
                                    <img src={card.imgSrc} alt={card.title} className={`card-img-top ${styles.cardImg}`} />
                                    <h5 className={`card-title ${styles.cardTitle}`}>{card.title}</h5>
                                    <img src={circleArrow} alt="Circle Arrow" className={styles.arrowIcon} />
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Dummy data for the card content
const cardsData = [
    {
        title: 'Você mesmo',
        imgSrc: yourselfImg, 
        link: '/voce-mesmo'
    },
    {
        title: 'Amigos e familiares',
        imgSrc: familyImg,
        link: '/amigos-e-familiares'
    },
    {
        title: 'Comunidade',
        imgSrc: communityImg,
        link: '/comunidade'
    }
];

export default ImpactCards;
