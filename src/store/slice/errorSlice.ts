import { createSlice } from '@reduxjs/toolkit';

interface ErrorMessage {
  errorMessage: string;
}

const initialState: ErrorMessage = {
  errorMessage: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;
