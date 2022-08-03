import React, { useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Php from '../assets/php.svg';
import "../App.css";
import Aos from 'aos';
import "aos/dist/aos.css";


const Skills = () => {
    useEffect(() => {
        Aos.init({duration:3000})
    }, [])
  return (
    <div  id="skills" name='skills' className='w-full -mb-[350px] md:-mb-[300px] h-[1100px] md:min-h-screen  bg-[#f5f5f5]   md:pt-[100px] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full -mt-20 md:-mt-[200px]'>
          <div className='text-veryDarkBlue -mt-[300px] md:-mt-0'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 font-orbitron'>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div data-aos="fade-right" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div data-aos="fade-right" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={Node} alt="icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div data-aos="fade-right" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={Mongo} alt="Mongodb icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div data-aos="fade-right" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={FireBase} alt="Firebase icon" />
                  <p className='my-4'>FireBase</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Firebase icon" />
                  <p className='my-4'>Tailwind</p>
              </div>
              <div data-aos="fade-left" className='shadow-md shadow-[#040c16] md:hover:scale-110 duration-500 bg-[#0a192f] '>
                  <img className='w-20 mx-auto' src={Php} alt="Firebase icon" />
                  <p className='my-4'>Php</p>
              </div>
            
          </div>
      </div>
    </div>
  );
};

export default Skills;
