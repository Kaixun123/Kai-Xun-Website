import React from 'react';
import Image from 'next/image';

const CardComponent = ({ text }) => {
  return (
    <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center text-center p-2' style={{ borderRadius: '8px', overflow: 'hidden' }}>
      <div className="col-sm-10 col-md-6 col-lg-3 p-3 justify-content-center mx-auto" >
        <Image src='/profile.jpg' alt="Card" width={400} height={400} style={{ borderRadius: '50%', maxWidth: '100%' }}/>
      </div>  
      <div className="col-12 col-sm-8 col-md-6 col-lg-9 p-3" style={{fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2.5em', paddingTop:'2%', fontWeight: 'bold', color: 'white'}}>About Me</h1>
        <p style={{fontSize:'1.5em', letterSpacing:'3px', paddingTop:'5%', color: 'white'}}>{text}</p>
      </div>
    </div>
  );
};

export default CardComponent;