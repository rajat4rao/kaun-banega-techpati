import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DialogBackdrop, Dialog, DialogPanel } from '@headlessui/react'
import ExpandedProfile from './headerComponents/ExpandedProfile'
import BasicProfile from './headerComponents/BasicProfile'
import MobileProfile from './headerComponents/MobileProfile'
import BasicProfilePlaceholder from './headerComponents/BasicProfilePlaceholder'
import MobileProfilePlaceholder from './headerComponents/MobileProfilePlaceholder'
import { fetchUserData} from './user/UserUtils'
import { loadComponent } from '../Utils'

function Header() {

    const [userData, setUserData] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [isEditOpen, setIsEditOpen] = useState(false)

    useEffect(() => {
        fetchUserData(setUserData, setImageUrl, localStorage.getItem('userId'))
    }, [])


    return (
        <div className='bg-second-bg py-4 px-4 sm:px-10 flex justify-between items-center fixed w-full z-50'>

            {/* LOGO */}

            <Link to={'/'}>
                <h1 className='text-white p-3 font-bold text-big-font text-3xl font-display drop-shadow-2xl'>Kaun Banega Techpati</h1>
            </Link>

            {/* ! BASIC PROFILE */}

            <div className='hidden sm:block'>
                {loadComponent(userData, <BasicProfilePlaceholder />, <BasicProfile imageUrl={imageUrl} userData={userData} setIsEditOpen={setIsEditOpen} />)}
            </div>

            <div className='block sm:hidden'>
                {loadComponent(userData, <MobileProfilePlaceholder />, <MobileProfile imageUrl={imageUrl} userData={userData} setIsEditOpen={setIsEditOpen} />)}
            </div>

            {/* EXPANDED PROFILE */}

            <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/90" />
                <div className="fixed inset-0 flex items-center justify-center">
                    <DialogPanel className="bg-second-bg shadow-2xl rounded-lg w-96">
                        <ExpandedProfile />
                    </DialogPanel>
                </div>
            </Dialog>

        </div>
    )
    
}

export default Header