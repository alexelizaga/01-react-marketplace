import { types } from '../types/types';

export const authLogin = (name: string, at: any) => ({
    type: types.authLogin,
    payload: {
        name,
        at,
    }
});