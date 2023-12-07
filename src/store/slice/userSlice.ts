import { createSlice } from '@reduxjs/toolkit';

interface User {
  isAuth: boolean;
}

const initialState: User = {
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsLogin } = userSlice.actions;

export default userSlice.reducer;
