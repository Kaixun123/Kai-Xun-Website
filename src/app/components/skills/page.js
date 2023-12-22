"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3, faJs, faNodeJs, faPython, faVuejs, faJava, faBootstrap, faAws  } from '@fortawesome/free-brands-svg-icons';
import './SkillsComponent.css';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const SkillsComponent = () => {
  const [showInfo, setShowInfo] = useState(false);
  // const project1 = 'https://kaixun-website.s3.ap-southeast-1.amazonaws.com/hungerheroes.jpg';

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div className="container">
      <h1 className="text-white" style={{ fontSize: '3em', textAlign:'center', marginBottom:"5%", fontWeight: 'bold'}}>My Skill Set</h1>
      <div className="row justify-content-around gap-5" >
        <div className="col-lg-5 p-10 frontend text-white opacity-100" style={{backgroundColor: 'grey'}}>
          <h2 className="text-center mb-5" style={{ fontSize: '1.5em' }}>Frontend</h2>
          <div className="row gap-4">
            <div className="col-lg-5 mb-3">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faReact} size="4x" />
                <p>react</p>
              </div>
            </div>
            <div className="col-lg-5 mb-3">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faCss3} size="4x" />
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className="row gap-4">
            <div className="col-lg-5 mb-3">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faJs} size="4x" />
                <p>JavaScript</p>
              </div>
            </div>
            <div className="col-lg-5 mb-3">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faVuejs} size="4x" />
                <p>VueJs</p>
              </div>
            </div>
          </div>
          <div className="row gap-4">
            <div className="col-lg-12 mb-3">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faBootstrap} size="4x" />
                <p>BootStrap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 p-10 backend text-white" style={{backgroundColor: 'grey'}}>
          <h2 className="text-center mb-5" style={{ fontSize: '1.5em' }}>Backend</h2>
          <div className="row gap-4">
            <div className="col-lg-5 mb-3">
            <div className="d-flex flex-column align-items-center">
              <FontAwesomeIcon icon={faNodeJs} size="4x" />
              <p>Node.js</p>
            </div>
            </div>
            <div className="col-lg-5 mb-3">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faPython} size="4x" />
                <p>Python</p>
              </div>
            </div>  
          </div>
          <div className="row gap-4">
            <div className="col-lg-5 mb-3">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faJava} size="4x" />
                <p>Java</p>
              </div>
            </div>
            <div className="col-lg-5 mb-3">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faAws} size="4x" />
                <p>AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-white" style={{ fontSize: '3em', textAlign:'center', marginBottom:"5%", marginTop: '10%', fontWeight: 'bold'}}>My Project</h1>
      <div className="row justify-content-center">
        <Carousel onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Carousel.Item>
            <div className="carousel-item-content">
              <Image
                className="carousel-image mx-auto"
                src='/hungerheroes.jpg'
                alt="First slide"
                style={{ borderRadius: '0', width: '60%', height:'50%'}}
              />
              {showInfo && 
                <div className="carousel-info mx-auto p-10">
                  <p style={{ fontWeight: "bold", marginBottom: "1em" }}>hungerheroes</p>
                  <p style={{ textAlign:'left', marginBottom: "1em" }}>A school project set out to combat food wastage in Singapore by automating the process of donation to food banks. Donations can be through food or monetary contribution.</p>
                  <p style={{ textAlign:'left', marginBottom: "1em" }}>Tech Stack Used: Vuejs, Bootstrap, Firebase, CSS</p>
                </div>}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default SkillsComponent;