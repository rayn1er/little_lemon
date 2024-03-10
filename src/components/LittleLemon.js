import React from 'react';
import image1 from '../images/food1.avif'
import image2 from '../images/restaurant.jpg'

const LittleLemon = () => {
    return (
        <div className='little-lemon'>
            <div className='text'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid sint nobis accusantium vero dolorem iure tempora illo, quia vel? Consectetur odio eius consequatur earum velit nam accusamus, non dolores!</p>
            </div>

            <div className='image1'><img src={image1}/></div>
            <div className='image2'><img src={image2}/></div>
        </div>
    );
};

export default LittleLemon;