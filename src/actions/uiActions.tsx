import { types } from '../types/types';

export const uiSetEntryPath = ( path: string ) => ({
    type: types.uiSetEntryPath,
    payload: path
});