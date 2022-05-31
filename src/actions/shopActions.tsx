import { types } from '../types/types';

export const shopAddItem = ( productName: string ) => ({
    type: types.shopAddItem,
    payload: productName
});

export const shopDeleteItem = () => ({
    type: types.shopDeleteItems
});