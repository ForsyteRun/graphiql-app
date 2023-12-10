import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './slice/userSlice';
import requestReducer from './slice/requestSlice';
import errorReducer from './slice/errorSlice';

const reducer = combineReducers({
  user: userReducer,
  request: requestReducer,
  error: errorReducer,
});

const store = configureStore({
  reducer,
});

setupListeners(store.dispatch);

export default store;
