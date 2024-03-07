import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Spinner} from 'flowbite-react'
import ErrorPage from './ErrorPage';
import { signInSucess } from '../redux/Slice/UserSlice';
import { checkAuthStatus } from '../helpers/apiCommunicator';

const PrivateRoute = ({children}) => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state)=>state.user);
  console.log("currentUser from Private Route",currentUser);
  const [loading,setLoading] = useState(true);
  const [isPresent,setIsPresent] = useState(false);

  async function checkStatus(){
    const data = await checkAuthStatus();
    if(data){
      dispatch(signInSucess(data));
    }
  }

  useEffect(()=>{
    const cookie  = document.cookie;
    console.log("cookie",cookie);
    checkStatus();
    if(cookie){
      setIsPresent(true);
    }
    setLoading(false);
  },[])

  return (
    <div>
     {
          currentUser!== null? ( <div>{
          loading ? ( <Spinner aria-label="Center-aligned spinner example" />) :
          (<div>
           {children}
          </div>)
        }</div>) : (<ErrorPage/>)
            }
       
    </div>
  )
}

export default PrivateRoute