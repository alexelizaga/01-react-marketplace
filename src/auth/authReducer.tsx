import { types } from "../types/types";

// const state = {
//   name: 'Alex',
//   logged: true
// }
const initialState = {}

export const authReducer = ( state = initialState, action: any ) => {

  switch (action.type) {
    case types.authLogin:
      return {
        ...action.payload,
        logged: true,
      }
    case types.authLogout:
      return {
        logged: false,
      }
    case types.shopAddItem:
      return {
        ...state,
        protectShoppingcard: true,
        ...action.payload,
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
