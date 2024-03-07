import {Button, Navbar} from 'flowbite-react'
import React from 'react'
import { FaSun,FaMoon } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { themeChange } from '../../redux/Slice/ThemeSlice'
import { Link } from 'react-router-dom'
import { signOutSucess } from '../../redux/Slice/UserSlice'
import axios from 'axios'

const Header = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector((state)=>state.theme);
    const {isLoggedIn} = useSelector(state=>state.user);
    const logoutHandler = async() =>{
      try {
        axios.post(`${process.env.REACT_APP_BASE_URL}/clearCookie`);
        dispatch(signOutSucess())
      } catch (error) {
        
      }
    }
  return (
    <Navbar >
        <div className=' font-bold  font-serif text-gradient-to-r from-purple-700 to-pink-400  rounded-full w-fit h-fit p-1 '>
          <Link to={'/'}>
          Let's Connect
          </Link>
        </div>
        <div className='sm:flex sm:gap-4'>
            <button className=' animate-pulse' onClick={()=>{dispatch(themeChange())}}>
                {
                    theme==='dark'? (<FaSun  className='h-6 w-6'/>) :(<FaMoon className='h-6 w-6 '/>)
                }
            </button>
            <div>
              {
                isLoggedIn ? (<button className="rounded-md bg-orange-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-orange-500 "
            onClick={logoutHandler}>
                Log Out
              </button>):(null)
              }
            </div>
        </div>
    </Navbar>
  )
}

export default Header