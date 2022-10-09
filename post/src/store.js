import { configureStore, createSlice } from '@reduxjs/toolkit'

let text = createSlice({
    name : 'text',
    initialState : [
        {
            "id": 1,
            "title": "Leanne Graham",
            "username": "z",
            "content": "집",
        },
        {
            "id": 2,
            "title": "a",
            "username": "x",
            "content": "가",
        },
        {
            "id": 3,
            "title": "b",
            "username": "c",
            "content": "고",
        },
        {
            "id": 4,
            "title": "Leanne c",
            "username": "v",
            "content": "싶",
        },
        {
            "id": 5,
            "title": "Leanne d",
            "username": "b",
            "content": "다",
        },
        {
            "id": 6,
            "title": "Leanne e",
            "username": "n",
            "content": "제",
        },
        {
            "id": 7,
            "title": "Leanne f",
            "username": "m",
            "content": "발",
        }
    ]
})

export default configureStore({
    reducer: {
        text : text.reducer
    }
})