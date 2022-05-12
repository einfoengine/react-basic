// import {actiontypes} from '../constants/action-types';

// Reducer is a function that takes state and action as paramiter and returns a new state.

const initialState = {
    numberOfCakes: 10,
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'BUY_CAKE': 
        return{
            ...state, 
            numberOfCakes: state.numberOfCakes - 1,
        }
        default: return state;
    } 
}

export default cakeReducer;