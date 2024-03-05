import React from 'react'
import {useSelector} from 'react-redux'
import ErrorPage from './ErrorPage';

const PrivateRoute = ({children}) => {
  const {currentUser} = useSelector((state)=>state.user);
  console.log("currentUser",currentUser)
  return (
    <div>
        {
          currentUser!== null? (<div>{children}</div>) : (<ErrorPage/>)
        }
    </div>
  )
}

export default PrivateRoute