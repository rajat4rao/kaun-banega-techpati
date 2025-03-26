import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import Login from './Login'
import Register from './Register'

function GetStarted() {

  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isOverlayOpen, setIsOverlayOpen] = useState('invisible')

  return (
    <div className='col-start-1 col-span-3 flex flex-col justify-center md:justify-around relative px-5 md:px-0'> {/* Removed md:h-dvh and adjusted padding */}

      <h1 className='text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-display font-bold text-white'>Techinal Quiz App</h1> {/* Adjusted font sizes */}
      <p className='text-white text-lg md:text-xl lg:text-2xl text-center md:text-left mt-8 md:mt-0 max-w-md md:max-w-2xl lg:max-w-3xl'>Login or create new account and start solving quizzes about your preferred technology topics.</p> {/* Adjusted font sizes and max-width */}

      <div className='mt-10 md:mt-16 flex justify-center md:justify-start flex-wrap gap-3'>
        <a href="#secondSection">
          <button onClick={() => {setIsRegisterOpen(true)}} className='bg-main-accent hover:bg-second-accent hover:scale-105 transition-all text-white font-display text-med-font py-1 w-44 rounded-md shadow-lg'>Register</button>
        </a>
        <Dialog open={isRegisterOpen} onClose={() => {setIsRegisterOpen(false)}} className="relative z-50">
          <DialogBackdrop className="fixed inset-0 bg-black/70" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="bg-second-bg p-5 rounded-lg">
              <Register />
            </DialogPanel>
          </div>
        </Dialog>

        <a href="#secondSection">
          <button onClick={() => {setIsLoginOpen(true)}}  className='bg-second-accent hover:bg-main-accent hover:scale-105 transition-all text-white font-display text-med-font py-1 w-44 rounded-md shadow-lg'>Login</button>
        </a>
        <Dialog open={isLoginOpen} onClose={() => {setIsLoginOpen(false)}} className="relative z-50">
          <DialogBackdrop className="fixed inset-0 bg-black/70" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="bg-second-bg p-5 rounded-lg">
              <Login />
            </DialogPanel>
          </div>
        </Dialog>
      </div>


    </div>
  )
}

export default GetStarted