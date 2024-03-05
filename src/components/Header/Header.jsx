import {Button, Navbar} from 'flowbite-react'
import React from 'react'
import { FaSun,FaMoon } from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux'
import { themeChange } from '../../redux/Slice/ThemeSlice'
import { Link } from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector((state)=>state.theme);
  return (
    <Navbar >
        <div className=' font-bold  font-serif text-gradient-to-r from-purple-700 to-pink-400  rounded-full w-fit h-fit p-1 '>
          <Link to={'/'}>
          Let's Connect
          </Link>
        </div>
        <div>
            <button className=' animate-pulse' onClick={()=>{dispatch(themeChange())}}>
                {
                    theme==='dark'? (<FaSun  className='h-6 w-6'/>) :(<FaMoon className='h-6 w-6 '/>)
                }
            </button>
        </div>
    </Navbar>
  )
}

export default Header