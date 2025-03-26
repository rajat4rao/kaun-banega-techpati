import React from 'react'
import {Fade} from 'react-awesome-reveal'

function DetailsText() {
  return (
    <Fade delay={100} triggerOnce={true}>
    <div className='text-white max-w-md md:max-w-2xl lg:max-w-3xl'> {/* Made width responsive */}
        <h1 className='font-display text-4xl md:text-5xl lg:text-6xl font-bold'>Kaun Banega Techpati</h1> {/* Adjusted font sizes */}
        <p className='text-sm md:text-base lg:text-lg mt-4 md:mt-8'>Kaun Banega Techpati is a <b>MERN Stack</b> Project.</p> {/* Adjusted font sizes and margin */}
        <p className='text-sm md:text-base lg:text-lg mt-4 md:mt-8'>Registered user data are saved on <b>MongoDB</b>. I've created <b>REST API</b> using <b>Node.js</b> (express) to communicate with database. I've used quizAPI to fetch questions in different topics.</p> {/* Adjusted font sizes and margin */}
        <p className='text-sm md:text-base lg:text-lg mt-4 md:mt-8'><b>React.js</b> and <b>Tailwindcss</b> is used to build client-side of the project.</p> {/* Adjusted font sizes and margin */}
    </div>
    </Fade>
  )
}

export default DetailsText