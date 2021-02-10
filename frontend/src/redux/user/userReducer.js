import {LOGIN,LOGOUT} from "./userTypes"

const initialState = {
    isLoggedIn: false
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        // default:
        //     return state;
    }
}

export default userReducer