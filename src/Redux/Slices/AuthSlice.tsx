import { createSlice } from '@reduxjs/toolkit';

 export const AuthSlice = createSlice({
    name: 'auth',
    initialState:{
        isLoggedIn : false,
        accessToken: null
    },
reducers:{
    logIn : (state, action)  => {
        state.isLoggedIn = true,
        state.accessToken = action.payload
    },
    logOut: (state) => {
        state.isLoggedIn = false,
        state.accessToken = null
    }
}
})

export const {logIn, logOut} = AuthSlice.actions


export default AuthSlice.reducer