import { createSlice } from '@reduxjs/toolkit';
import { initialRightHeaderLayout } from './initial-constants/initialRightHeaderLayout';

export const headerRightLayoutSlice = createSlice({
  name: 'headerRightLayout',
  initialState: initialRightHeaderLayout,
  reducers: {
    update: (state, action) => {
      const headerRightLayout = {
        key: state.length + 1,
        ...action.payload
      };

      return [...state, headerRightLayout];
    }
  }
});

export const { update } = headerRightLayoutSlice.actions;

// this is for configureStore
export default headerRightLayoutSlice.reducer;
