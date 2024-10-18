import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUnlocked: true,
};

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
});

export default authSlice.reducer;
