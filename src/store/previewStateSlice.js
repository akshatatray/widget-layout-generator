import { createSlice } from '@reduxjs/toolkit';

export const previewStateSlice = createSlice({
  name: 'previewState',
  initialState: 'inactive',
  reducers: {
    setPreviewState: (state, action) => action.payload,
  },
});

export const { setPreviewState } = previewStateSlice.actions;
export default previewStateSlice.reducer;
