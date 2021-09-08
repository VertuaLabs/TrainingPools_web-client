import React, { Fragment, useState, useReducer } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Popover, Transition } from '@headlessui/react';
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
  ShoppingCartIcon
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';


// <ShoppingCartIcon className='stroke-current stroke-0 text-white'/>

export default function SuberBar() {
    return (
        <>
            <SuperBarMini/>
        </>
    )
}


// <ResponsiveLogo className='col-start-1 col-end-2 g-blue-500 '/>

//                 <MenuItems className='col-start-2 col-end-6 invisible m-0 md:visible justify-center g-yellow-500'/>

//                 <div className='col-start-6 col-end-7 g-red-400'>
//                     <div className=''>
//                         <MenuIcon className='stroke-current stroke-0 text-white visible md:invisible h-12 cursor-pointer'/>
//                     </div>
//                 </div>



function SuperBarBig() {
    return (
        <>
        </>
    )

}

function SuperBarMini() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='fixed'>
            <div 
            className='w-full grid grid-cols-6 gap-4 items-center md:space-x-6'
            style={{backgroundColor:"#447764"}}>

                <Logo className='col-start-1 col-end-2 h-12 cursor-pointer'/>
                <div className='col-start-2 col-end-6 flex justify-center text-white'>
                    <span style={{ fontFamily: "syncopate" }}>celltonomy</span>
                </div>
                <div className='col-start-6 col-end-7 g-red-400'>
                    <div className='flex justify-end'>
                        <MenuToggle className='h-12 w-12' onClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen}/>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
            <div className='w-screen h-screen bg-red-500'>
            </div>
            )}
           
        </div>
    )
}

const MenuToggle = (props) => {
    // const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`cursor-pointer ${props.className}`}>
        {!props.isOpen && (
            <MenuIcon 
            className='stroke-current stroke-0 text-white'
            onClick={()=>setIsOpen(!isOpen)}
            />
        )}
        {props.isOpen && (
            <XIcon
            className='stroke-current stroke-0 text-white'
            onClick={()=>setIsOpen(!isOpen)}
            />
        )}
        </div>
    )
}



const ResponsiveLogo = (props) => {
    return (
        <>
            <div className={`flex items-center relative  ${props.className} cursor-pointer g-yellow-400`}>
                <Logo className='h-12'/>
                <div className='text-xl text-white leading-none mt-1 invisible md:visible' style={{ fontFamily: "syncopate" }}>
                    celltonomy
                </div>
            </div>
        </>
    )
}


const MenuItems = (props) => {
    return (
        <>
            <div className={`flex flex-1 items-center space-x-10 text-xl ${props.className}`}>
                <MenuItem label='make stem cells'/>
                <MenuItem label='grow biosystems'/>
                <MenuItem label='transport biosystems'/>
                <MenuItem label='bio bank'/>
                <MenuItem label='mine token'/>
                <MenuItem label='stake token'/>
                <MenuItem label='about'/>
            </div>
        </>
    )
}

const MenuItem = (props) => {
    return (
        <>
            <div 
            className='cursor-pointer text-white hover:text-green-200 transition-colors duration-150'
            style={{fontVariant: 'small-caps'}}
            >
                {props.label}
            </div>
        </>
    )
}
