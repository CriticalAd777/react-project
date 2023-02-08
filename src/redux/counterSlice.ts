import {createSlice} from '@reduxjs/toolkit';
const initialState = {
<<<<<<< HEAD
    count: 10
=======
    count: 0
>>>>>>> f46a5016675adfa7250702c928954b44bbe56436
}
const counterSlice = createSlice ({
    initialState: initialState,
    name: 'counter',
    reducers: {
<<<<<<< HEAD
        increment: (state, data) =>{
            state.count += data.payload;
        },
        decrement: (state, data) => {
            state.count -= data.payload;
=======
        increment: (state) =>{
            state.count++
        },
        decrement: (state) => {
            state.count--;
>>>>>>> f46a5016675adfa7250702c928954b44bbe56436
        },
        reset: state => {
            state.count = initialState.count;
        }
    }
<<<<<<< HEAD
})
export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
=======
})
>>>>>>> f46a5016675adfa7250702c928954b44bbe56436
