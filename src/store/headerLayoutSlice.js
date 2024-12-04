import { createSlice } from '@reduxjs/toolkit';

export const headerLayoutSlice = createSlice({
  name: 'headerlayout',
  initialState: [],
  reducers: {
    update: (state, action) => {
      const headerLayout = {
        header: action.payload
      };

      return [...state, headerLayout];
  }
}
});

export const { update } = headerLayoutSlice.actions;

// this is for configureStore
export default headerLayoutSlice.reducer;