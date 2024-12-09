import { createSlice } from '@reduxjs/toolkit';
import { initialRightHeaderLayout } from './initial-constants/initialRightHeaderLayout';

export const headerRightLayoutSlice = createSlice({
  name: 'headerRightLayout',
  initialState: initialRightHeaderLayout,
  reducers: {
    updateHeaderRightItems: (state, action) => {
      return action.payload
    }
  }
});

export const { updateHeaderRightItems } = headerRightLayoutSlice.actions;

// this is for configureStore
export default headerRightLayoutSlice.reducer;
