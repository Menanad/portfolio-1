import { Typewriter } from 'react-simple-typewriter';
import './hero.css'
import { MdVerified } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import Dev from '../../animations/dev.json'
import Lottie from 'lottie-react';
export default function Hero() {
  return (
    <section id="about" className='hero flex'>
      <div className='left-section '>
        <div className="parent-avater flex">
          <img
            name='mena nady slash' className='avatar' src="./2024-07-25 1dd95223.jpg" />
          <div className='icon-verified'><MdVerified /></div>
        </div>
        <div className='section-up'>
          <h1
            className='bg-blue' >Hi There!
            <span className='wave'>👋🏻</span>
          </h1>
          <h1

            className='title'>I'M
            <strong > Mena Nady Slash</strong>
          </h1>
          <h1
            className='bg-blue'>
            <Typewriter
              words={['Front-End Developer.', 'Freelancer.']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <p
          className='paragraph'>
          Proficient in developing front-end applications using React, I specialize in building component-based architectures and managing application state with Redux or Context API. My skill set includes utilizing React Hooks, React Router, and integrating RESTful APIs. I am committed to writing clean, maintainable code that prioritizes performance and user experience
        </p>
        <div className="all-icons flex">
          <a href='https://www.instagram.com/mena_nady_slash?igsh=MTRwdWZmNWprZHBqeg%3D%3D&utm_source=qr'>
            <div className="icon">
              <FaInstagram />
            </div>
          </a>
          <a href='https://github.com/Menanad'>
            <div className="icon">
              <IoLogoGithub />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mena-nady-2163a2303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <div className="icon">
              <FaLinkedin />
            </div>
          </a>
        </div>
      </div>
      <div className='right-section'>
        <Lottie animationData={Dev} />
      </div>
    </section>
  )
}
