import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3, faJs, faNodeJs, faPython, faVuejs, faJava, faBootstrap, faAws  } from '@fortawesome/free-brands-svg-icons';
import './SkillsComponent.css';

const SkillsComponent = () => {
  return (
    <div className="container">
      <h1 className="text-white" style={{ fontSize: '3em', textAlign:'center', marginBottom:"5%"}}>My Skill Set</h1>
      <div className="row justify-content-around gap-5" >
        <div className="col-lg-5 p-10 frontend text-white opacity-100" style={{backgroundColor: 'grey'}}>
          <h2 className="text-center mb-5">Frontend</h2>
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
            <div className="col-lg-5 mb-3">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faBootstrap} size="4x" />
                <p>BootStrap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 p-10 backend text-white" style={{backgroundColor: 'grey'}}>
          <h2 className="text-center mb-5">Backend</h2>
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
    </div>
  );
};

export default SkillsComponent;