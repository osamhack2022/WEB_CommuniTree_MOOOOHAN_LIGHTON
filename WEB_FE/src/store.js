import { configureStore, createSlice } from '@reduxjs/toolkit'

let authMode = createSlice({
    name : 'authMode',
    initialState : 'signin',
    reducers: {
        setAuthMode(state){
            return setAuthMode( {state} === "signin" ? "signup" : "signin")
        }
    }
})

export let { setAuthMode } = authMode.actions 

export default configureStore({
    reducer: {
        authMode : authMode.reducer
    }
}) 