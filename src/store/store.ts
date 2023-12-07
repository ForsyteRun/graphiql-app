import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './slice/userSlice';

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer,
});

setupListeners(store.dispatch);

export default store;
