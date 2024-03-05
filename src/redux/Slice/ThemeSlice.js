import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme:"dark"
};

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        themeChange:(state) =>{
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    }
})

export const {themeChange} = themeSlice.actions;
export default themeSlice.reducer;