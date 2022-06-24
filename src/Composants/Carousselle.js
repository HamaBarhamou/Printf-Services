import React from 'react';
import legend1 from '../assets/legende1.jpeg'
import legend2 from '../assets/legende2.jpeg'
import legend3 from '../assets/legende3.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousselle = () => {
    return (
        <Carousel>
                <div>
                    <img src={legend1} alt="nice"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={legend2} alt="nice"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={legend3} alt="nice"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Carousselle;