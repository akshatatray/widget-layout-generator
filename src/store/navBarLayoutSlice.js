import { createSlice } from '@reduxjs/toolkit';
import { initialNavBarLayout } from './initial-constants/initialNavBarLayout';

export const navBarLayoutSlice = createSlice({
  name: 'navBarLayout',
  initialState: initialNavBarLayout,
  reducers: {
    updateNavBarItems: (state, action) => {
      return action.payload
    }
  }
});

export const { updateNavBarItems } = navBarLayoutSlice.actions;

// this is for configureStore
export default navBarLayoutSlice.reducer;
