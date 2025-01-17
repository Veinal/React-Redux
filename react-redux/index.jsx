//This is without using the redux toolkit
//This file is supposed to be placed inside the store folder within the src
//but due to conflicts with the new index file I have placed it outside src.


/*import { createStore } from 'redux'

const reducerFn = ( state={ counter:0 },action ) =>{

    if(action.type === 'INC'){
        return { counter : state.counter + 1}
    }

    if(action.type === 'DEC'){
        return { counter : state.counter - 1}
    }

    if(action.type === 'ADD'){
        return { counter : state.counter + action.payload}
    }

    return state
}

const store = createStore(reducerFn)

export default store;*/