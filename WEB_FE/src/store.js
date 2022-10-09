import { configureStore, createSlice } from '@reduxjs/toolkit'

let users = createSlice({
    name : 'users',
    initialState : [
        { mNumber: '22-76025739', email: 'kim@test.com', password: '123', name: 'Kim' },
        { mNumber: '21-76025739', email: 'lee@test.com', password: '456', name: 'Lee' },
        { mNumber: '20-76025739', email: 'park@test.com', password: '789', name: 'Park' }
    ],
    reducers: {
        setUsers(state, actions){
            return state.push(actions.payload)
        }
    }
})

export let { setUsers } = users.actions 

export default configureStore({
    reducer: {
        users : users.reducer
    }
}) 