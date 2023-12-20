"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import CardComponent from './components/card/page';
import Navbar from './components/header/page';
import ContactComponent from './components/contact/page';
import SkillsComponent from './components/skills/page';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

export default function Home() {
  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#FFFFFF",
        opacity: 0.1,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App container-fluid main-container" style={{backgroundColor: '#000080'}}>
        <Navbar imageUrl="/websitelogo.png"/>
        <Particles options={options} init={particlesInit} />
          <div className= "flex min-h-screen flex-col items-center justify-center">

            <h1 className='text-white' style={{ fontSize: '3em'}}>Hello There! 👋</h1>
            <h1 className='text-white' style={{ fontSize: '3em'}}>My Name is <span style={{fontWeight: 'bold'}}>Kai Xun</span></h1>
            <TypeAnimation
            sequence={[
              'An inpsiring Software developer', 
              3000, 
              'An inpsiring Data analyst', 
              3000,
              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2.5em', display: 'inline-block', paddingTop: '3%', color:'white'}}
          />

        </div>

        <div className= "min-h-screen items-center justify-content-center p-10 w-70" id="section1">
          <CardComponent
            text="I'm Kai Xun, a dedicated university student with a passion for continuous learning and a knack for taking on challenges. Eager to broaden my horizons, I thrive on acquiring new skills and enjoy networking with diverse individuals. My relentless work ethic, coupled with a love for overcoming challenges, fuels my drive to grow both personally and professionally. I'm not just seeking a job; I'm seeking an opportunity to contribute meaningfully and learn from a dynamic team. Let's connect—I'm excited about the possibility of bringing my enthusiasm and commitment to your organization."
            imageUrl="/profile.jpg"
          />
        </div>

        <div className= "min-h-screen items-center justify-content-center p-10 w-70" id="section2">
          <SkillsComponent/>
        </div>

        <div className= "min-h-screen items-center justify-content-center p-10 w-70" id="section3">
          <ContactComponent/>
        </div>
    </div>

  )
}
