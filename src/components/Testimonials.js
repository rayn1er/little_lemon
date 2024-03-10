import React from 'react';
import davido from '../images/davido.webp'

const Testimonials = () => {
    return (
        <div className='testimonials-container'>
            <div className='text'>
                <h2>Testimonials</h2>
            </div>
            <div className='testimonials-container-card'>
            <div className="card">
                <div className="img">
                    <img src={davido}alt="lemondessert"/>
                </div>
              
              <div className='guestname'><p>Davido</p></div>

              <div className='opinion'><p>Amazing restaurant</p></div>

            </div>

            <div className="card">
                <div className="img">
                    <img src={davido}alt="lemondessert"/>
                </div>
              
              <div className='guestname'><p>Davido</p></div>

              <div className='opinion'><p>Amazing restaurant</p></div>

            </div>

            <div className="card">
                <div className="img">
                    <img src={davido}alt="lemondessert"/>
                </div>
              
              <div className='guestname'><p>Davido</p></div>

              <div className='opinion'><p>Amazing restaurant</p></div>

            </div>

            <div className="card">
                <div className="img">
                    <img src={davido}alt="lemondessert"/>
                </div>
              
              <div className='guestname'><p>Davido</p></div>

              <div className='opinion'><p>Amazing restaurant</p></div>

            </div>
            

            

        </div>
        </div>)
};

export default Testimonials;