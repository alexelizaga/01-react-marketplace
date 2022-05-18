import { types } from "../types/types";

// const state = {
//   name: 'Alex',
//   logged: true
// }

export const authReducer = ( state = {}, action: any ) => {

  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      }
    case types.logout:
      return {
        logged: false,
      }
    case types.addItem:
      return {
        ...state,
        protectShoppingcard: true,
        ...action.payload,
      }
    case types.deleteItem:
      return {
        ...state,
        protectShoppingcard: false,
        shoppingcard: []
      }
    default:
      return state;
  }

}
