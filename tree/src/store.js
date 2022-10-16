/* eslint-disable */
import { configureStore, createSlice } from '@reduxjs/toolkit'

let hashtag = createSlice({
    name : 'hashtag',
    initialState : ["#칭찬","#애로사항","#갈등","#소통","#기타"]
})

export default configureStore({
    reducer: {
        hashtag : hashtag.reducer
    }
}) 