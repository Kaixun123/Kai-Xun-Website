import React from 'react';
import Image from 'next/image';
import './CardComponent.css';

const CardComponent = ({ text }) => {
  return (
    <div className='cards'>
      <div className="image-container">
        <Image 
          className='image' 
          src='https://kaixun-website.s3.ap-southeast-1.amazonaws.com/profile.jpg' 
          layout="fill" 
          objectFit="cover" 
          alt="Card"/>
      </div>  
      <div className="text-container text-white">
        <h1 style={{ fontSize: '2.5em', paddingTop:'2%', fontWeight: 'bold'}}>About Me</h1>
        <p style={{fontSize:'1.5em', letterSpacing:'3px', paddingTop:'5%'}}>{text}</p>
      </div>

    </div>
  );
};

export default CardComponent;