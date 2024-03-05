import React from 'react'
import { useSelector } from 'react-redux'

const ThemeProvider = ({children}) => {
    const {theme} = useSelector(state => state.theme);
  return (
    <div className={theme}>
       <div className='text-slate-800 bg-slate-200 dark:text-slate-200 dark:bg-black'>
        {children}
       </div>
    </div>
  )
}

export default ThemeProvider