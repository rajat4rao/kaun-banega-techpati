import React from 'react'
import github from '../../../assets/github.png'

function Source() {
  return (
    <a className='flex z-20 py-2 px-3 align-center bg-black w-44 shadow-sm text-sm-font text-white justify-around rounded-md hover:scale-105 transition-transform absolute right-5 top-5 md:right-10 md:top-5' href='https://www.github.com/rajat4rao/kaunbanegatechpati' target='_blank'> {/* Adjusted position for responsiveness */}
        <img src={github} alt="Github" />
        <h1>Source Code</h1>
    </a>
  )
}

export default Source