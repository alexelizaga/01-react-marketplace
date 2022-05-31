import { types } from "../types/types";

const initialState = {
    protectShoppingcard: false,
    shoppingcard: []
}

export const shopReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case types.shopAddItem:
            return {
                ...state,
                protectShoppingcard: true,
                shoppingcard: [ ...state.shoppingcard , action.payload],
            }
        case types.shopDeleteItems:
            return {
                ...state,
                protectShoppingcard: false,
                shoppingcard: []
            }
        default:
            return state;
    }

}