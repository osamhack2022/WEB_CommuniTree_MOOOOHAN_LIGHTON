import { configureStore, createSlice } from '@reduxjs/toolkit'

let userPw = createSlice({
    name : 'password',
    initialState : '0000',
    reducers: {
        changePw(state, action){
            return action.payload
        }
    }
})

export let { changePw } = userPw.actions 

let userNum = createSlice({
    name : 'number',
    initialState : '11-12345678',
    reducers: {
        changeNum(state, action){
            return action.payload
        }
    }
})

export let { changeNum } = userNum.actions 

export default configureStore({
    reducer: {
        userPw : userPw.reducer,
        userNum : userNum.reducer
    }
}) 