import React from 'react'
import gear from '../../assets/gear.png'
import Source from './homeComponents/Source'
import GetStarted from './homeComponents/GetStarted'
import './home.css'
import {Fade} from 'react-awesome-reveal'

function SectionF() {

  return (
    <section className='min-h-screen bg-main-bg relative flex justify-center items-center overflow-hidden'> {/* Changed h-[101vh] to min-h-screen and added overflow-hidden */}



      <div className='z-0 pointer-events-none absolute animateSpin gearDiv left-[-20rem] top-[-20rem] md:left-[-10rem] md:top-[-10rem] lg:left-[-20rem] lg:top-[-20rem]'> {/* Adjusted gearDiv position for responsiveness */}
        <img src={gear} alt="gear"/>
      </div>


      <div className='z-40 relative flex flex-col items-center justify-around min-h-screen py-20'> {/* Changed h-dvh to min-h-screen and added padding */}

        <Fade delay={100} triggerOnce={true}>
        <div>
          <h1 className='font-display text-white drop-shadow-lg text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left'>Kaun Banega Techpati</h1> {/* Adjusted font sizes and alignment */}
        </div>


        </Fade>


      </div>
      <GetStarted />


    </section >
  )
}

export default SectionF