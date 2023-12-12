import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './style/ContactComponent.css';

const ContactComponent = () => {
  return (
    <div className="container text-center my-5">
      <h1 className='text-white' style={{ fontSize: '3em', marginBottom:"10%", marginTop:"10%", fontWeight:"bold"}}>Let&apos;s Connect</h1>
      <div className="row justify-content-center">
        <div className="col-4">
          <a className="contactList" href="https://github.com/Kaixun123">
            <FontAwesomeIcon icon={faGithub} className="bounce icon-border" size="4x" />
          </a>
        </div>
        <div className="col-4">
          <a className="contactList" href="https://www.linkedin.com/in/juay-kai-xun/">
            <FontAwesomeIcon icon={faLinkedin} className="bounce icon-border" size="4x" />
          </a>
        </div>
        <div className="col-4">
          <a className="contactList" href="https://instagram.com/juayykaixunn?igshid=NGVhN2U2NjQ0Yg==">
            <FontAwesomeIcon icon={faInstagram} className="bounce icon-border" size="4x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;