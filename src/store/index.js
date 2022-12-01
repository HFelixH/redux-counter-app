import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state, action) {
            state.counter ++;
        },
        decrement(state, action) {
            state.counter --;
        },
        addBy(state, action) {
            state.counter += action.payload;
        },
        subtractBy(state, action) {
            state.counter -= action.payload;
        }
    }
});

export const actions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;

// const reducerFn = (state={ counter:10 }, action) => {

// //Synchroneous function
// // We should not mutate the original state

//     if (action.type==='INCREMENT'){
//         return {counter: state.counter + 1};
//     }else if (action.type==='DECREMENT'){
//         return {counter: state.counter - 1};
//     }else if (action.type==='ADD'){
//         return {counter: state.counter + action.payload};
//     }else if (action.type==='SUBTRACT'){
//         return {counter: state.counter - action.payload};
//     }else{
//         return state; // This is the default state
//     }
// }

// const store = createStore(reducerFn);

// export default store;