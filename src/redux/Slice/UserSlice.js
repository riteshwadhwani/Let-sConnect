import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    currentUser:null,
    isLoggedIn:false,
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInSucess:(state,action)=>{
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        },
        signOutSucess:(state)=>{
            state.currentUser = null;
            state.isLoggedIn = false;
        }
    }
})

export const {signInSucess,signOutSucess} = userSlice.actions;

export default userSlice.reducer;

