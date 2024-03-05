
import React, { useState } from 'react'
import {Button} from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div className='w-screen h-screen sm:flex p-5 gap-4'>
    <div className='sm:w-1/2' >
    <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top"
              src="https://images.pexels.com/photos/3747132/pexels-photo-3747132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
              Please Log In First!
              </h3>
            </div>
          </div>
        </div>
    </div>
    
   <div className='sm:w-1/2'>
        <Button className=' animate-pulse' onClick={()=>{navigate("/login")}}  gradientDuoTone='purpleToPink'>
            Back to Log In page
        </Button>
   </div>
    </div>
  )
}

export default ErrorPage