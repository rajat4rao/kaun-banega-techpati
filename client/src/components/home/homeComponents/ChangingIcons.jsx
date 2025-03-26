import React, { useEffect } from 'react';
import {useState} from 'react'
import htmlImg from '../../../assets/HTML.svg'
import dockerImg from '../../../assets/Docker.svg'
import linuxImg from '../../../assets/Linux.svg'
import mysqlImg from '../../../assets/MySQL.svg'
import phpImg from '../../../assets/PHP.svg'
import pythonImg from '../../../assets/Python.svg'

function ChangingIcons() {

  const [imageIndex, setImageIndex] = useState(0)
  const [animState, setAnimState] = useState('')

  const icons = [htmlImg, mysqlImg, dockerImg, linuxImg, phpImg, pythonImg]

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState('fadeOut')
      setTimeout(() => {
        setAnimState('fadeIn')
        setImageIndex((i) =>  i+1 == icons.length ? 0 : i+1)
      }, 300);
    }, 2500);

    return() => clearInterval(interval)
  }, [])


  return (
    <div className='mt-10 md:mt-0 col-span-2 drop-shadow-2xl flex justify-center items-center'> {/* Removed md:h-dvh to allow flexible height */}
      <img alt="tech icon" className={`drop-shadow-2xl ${animState} w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80`} src={icons[imageIndex]} /> {/* Made image size responsive */}
    </div>
  )
}

export default ChangingIcons