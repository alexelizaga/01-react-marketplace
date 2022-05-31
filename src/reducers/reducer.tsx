import { combineReducers } from '@reduxjs/toolkit';

import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { shopReducer } from './shopReducer';

export const reducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    shop: shopReducer,
});