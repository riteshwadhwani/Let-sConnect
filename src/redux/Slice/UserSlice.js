import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    currentUser:null,
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInSucess:(state,action)=>{
            state.currentUser = action.payload;
        }
    }
})

export const {signInSucess} = userSlice.actions;

export default userSlice.reducer;

