import React from 'react'
import { Link } from 'react-router-dom'

function NonUserHeader() {
  return (
    <div className='bg-second-bg fixed w-full py-4 px-8 lg:px-16 flex justify-between items-center flex-col sm:flex-row'>
        <h1 className='text-white font-bold font-display mb-3 sm:mb-0 text-big-font'>
          <Link to='/'>Kaun Banega Techpati</Link>
        </h1>
        <div className='h-min text-white text-med-font sm:text-big-font bg-main-accent hover:bg-second-accent transition-all px-5 py-2 rounded'>
            <Link to='/'>Login or Register</Link>
        </div>
    </div>
  )
}

export default NonUserHeader