import { createSlice } from '@reduxjs/toolkit';

export const headerLayoutSlice = createSlice({
  name: 'headerlayout',
  initialState: [],
  reducers: {
    update: (state, action) => {
      const layout = {
        layout: action.payload
      };

      return [...state, layout];
  }
}
});

export const { update } = headerLayoutSlice.actions;

// this is for configureStore
export default headerLayoutSlice.reducer;