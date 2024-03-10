import React from 'react';
import greatsalad from '../images/greek salad.jpg'
import brucheta from '../images/bruchetta.svg'
import desert from '../images/desert.jpg'

const Menu = () => {
    return (
        <div className="menu_container">
        <div className="menu">
            <div className="items">
                <div><h2>Menu</h2></div>
                <div><button>order online</button></div>
            </div>
            
        </div>
    
        <div className="container">
            <div className="card">
                <div className="img">
                    <img src={greatsalad} alt="greeksalad"/>
                </div>
                <div className="descriptions">
                    <div><p>Greed salad</p></div>
                    <div><p>12.99$</p></div>
        
                </div>
        
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid sint nobis accusantium vero dolorem iure tempora illo, quia vel? Consectetur odio eius consequatur earum velit nam accusamus, non dolores!
                </div>
                
                <div className="button">
                    <button>Order a delivery</button>
                </div>
            </div>
        
            <div className="card">
                <div className="img">
                    <img src={brucheta} alt="bruccheta"/>
                </div>
                <div className="descriptions">
                    <div><p>bruchetta</p></div>
                    <div><p>5.99$</p></div>
        
                </div>
        
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid sint nobis accusantium vero dolorem iure tempora illo, quia vel? Consectetur odio eius consequatur earum velit nam accusamus, non dolores!
                </div>
                
                <div className="button">
                    <button>Order a delivery</button>
                </div>
            </div>
    
            <div className="card">
                <div className="img">
                    <img src={desert}alt="lemondessert"/>
                </div>
                <div className="descriptions">
                    <div><p>Lemon dessert</p></div>
                    <div><p>5.00$</p></div>
        
                </div>
        
                <div classNameName="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid sint nobis accusantium vero dolorem iure tempora illo
                </div>
                
                <div classNameName="button">
                    <button>Order a delivery</button>
                </div>
            </div>
    
          
        
        </div>
    </div>
    
    );
};

export default Menu;