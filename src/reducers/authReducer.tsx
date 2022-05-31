import { types } from "../types/types"

const initialState = {
    name: '',
    logged: false,
    at: '',
}

export const authReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                logged: true,
            }
        case types.authLogout:
            return {
                logged: false,
            }
        case types.authSetAccessToken:
            return {
                ...state,
                at: action.payload
            }
        default:
            return state;
    }

}