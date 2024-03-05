
import React, { useState } from 'react'
import LoginForm from '../components/LogInForm'
import { useNavigate } from 'react-router-dom'


const LogIn = () => {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen sm:flex p-5 gap-4'>
    <div className='sm:w-1/2' >
    <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-slate-200">
              Sign Up  tp Empower your Ideas with us!
              </h3>
            </div>
          </div>
        </div>
    </div>
    
   <div className='sm:w-1/2 mt-2'>
   <div className=''>Not registered yet ? <button className='text-blue-400' onClick={()=>{navigate('/signup')}}>Sign Up</button></div>
   <LoginForm/>
   </div>
    </div>
  )
}

export default LogIn