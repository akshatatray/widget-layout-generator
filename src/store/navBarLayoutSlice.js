import { createSlice } from '@reduxjs/toolkit';
import { initialNavBarLayout } from './initial-constants/initialNavBarLayout';

export const navBarLayoutSlice = createSlice({
  name: 'navBarLayout',
  initialState: initialNavBarLayout,
  reducers: {
    update: (state, action) => {
      const navBarLayout = {
        key: state.length + 1,
        ...action.payload
      };

      return [...state, navBarLayout];
    }
  }
});

export const { update } = navBarLayoutSlice.actions;

// this is for configureStore
export default navBarLayoutSlice.reducer;
