import React from 'react'
// import {logo} from "./assets/images/logo.jpg"
import logo from "./assets/images/logo.jpg"


function Navbar() {
  return (
    <div className='flex flex-wrap justify-between items-center'>
        
           

        <div className="">
            <img className='logoimg' src={logo }  alt="" />
        </div>
        <ul className='flex flex-wrap items-center  gap-7 mr-6'>
                <li className='cursor-pointer'> <a href="#">Home</a></li>
                <li  className='cursor-pointer'><a href="#">About</a></li>
                <li  className='cursor-pointer'><a href="#">Contact</a></li>
            </ul>



    </div>
  )
}

export default Navbar