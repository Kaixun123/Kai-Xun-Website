import React from 'react';
import './ContactComponent.css';

const ContactComponent = () => {
  return (
    <div className="row">
        <h1 className='text-white' style={{ fontSize: '3em', textAlign:'center'}}>Let&apos;s Connect</h1>
        <div className="row">
          <div className='col-lg-4'>
            <a className='contactList' href="#"><span>Github</span></a>
          </div>
          <div className='col-lg-4'>
            <a className='contactList' href="#"><span>LinkedIn</span></a>
          </div>
          <div className='col-lg-4'>
            <a className='contactList' href="#"><span>Instagram</span></a>
          </div>
        </div>
        
    </div>
  );
};

export default ContactComponent;