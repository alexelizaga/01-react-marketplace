import { types } from "../types/types";

const initialState = {
    loading: false,
    entryPath: '',
    msgError: null
}

export const uiReducer = (state = initialState, action: any) => {


    switch (action.type) {
        case types.uiSetEntryPath:
            return {
                ...state,
                entryPath: action.payload
            }
        default:
            return state;
    }

}