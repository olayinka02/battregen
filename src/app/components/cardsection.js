// components/CardSection.js
import React from 'react';
import Card from './card';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';

const CardSection = () => {
    const cardsData = [
        {
            image: image1,
            header: 'Proprietary Revitalization Method',
            paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            image: image2,
            header: 'industrial movers in the west African stored energy sector',
            paragraph: 'catering to an ever-growing market that demands sustainable options for transportation',
        },
        {
            image: image3,
            header: 'Profitability and Rapid Growth',
            paragraph: 'turn-key franchise model boasts low startup and operational costs for rapid growth',
        },
        {
            image: image4,
            header: 'Cutting-Edge Technology',
            paragraph: 'Employing advanced formulas to extend battery life significantly and performance',
        },
    ];

    return (
        <section className="  my-28 lg:px-12 lg:mx-16 md:mx-22 md:px-10">
            <div className="w-full px-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3  ">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        header={card.header}
                        paragraph={card.paragraph}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
