import {LOGIN, LOGOUT} from "./userTypes"

export const userLogin = () => {
    return {
        type: LOGIN
    }
}

export const userLogout = () => {
    return {
        type: LOGOUT
    }
}