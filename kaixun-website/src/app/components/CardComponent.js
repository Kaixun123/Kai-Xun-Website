import React from 'react';
import './CardComponent.css';

const CardComponent = ({ text, imageUrl }) => {
  return (
    <div className="card">
    <div className="image-container">
        <img className='image' src={imageUrl} alt="Card" />
      </div>  
      <div className="text-container">
        <h1 style={{ fontSize: '2.5em', paddingTop:'2%'}}>About Me</h1>
        <p style={{fontSize:'1.5em', letterSpacing:'3px', paddingTop:'5%'}}>{text}</p>
      </div>

    </div>
  );
};

export default CardComponent;