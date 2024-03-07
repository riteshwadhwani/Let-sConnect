import axios from 'axios';

export const checkAuthStatus = async() =>{
    const res = await axios.get("http://localhost:4000/api/v1/auth-status");
    if(res.status !== 200){
        return;
    }
    const data = await res.data;
    return data;
}