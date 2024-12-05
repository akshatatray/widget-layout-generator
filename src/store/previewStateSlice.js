import { createSlice } from '@reduxjs/toolkit';

export const previewStateSlice = createSlice({
  name: 'previewState',
  initialState: {previewState: "inactive", taskCollapsed: false},
  reducers: {
    setPreviewState: (state, action) => {
      return { ...state, previewState: action.payload };
    },
    setTaskCollapse: (state, action) => {
      return { ...state, taskCollapsed: action.payload };
    }
  },
});

export const { setPreviewState, setTaskCollapse } = previewStateSlice.actions;
export default previewStateSlice.reducer;
