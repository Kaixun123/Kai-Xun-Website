import React from 'react';
import './style/CardComponent.css';

const CardComponent = ({ text, imageUrl }) => {
  return (
    <div className='cards'>
      <div className="image-container">
        <img className='image' src={imageUrl} alt="Card" />
      </div>  
      <div className="text-container text-white">
        <h1 style={{ fontSize: '2.5em', paddingTop:'2%', fontWeight: 'bold'}}>About Me</h1>
        <p style={{fontSize:'1.5em', letterSpacing:'3px', paddingTop:'5%'}}>{text}</p>
      </div>

    </div>
  );
};

export default CardComponent;