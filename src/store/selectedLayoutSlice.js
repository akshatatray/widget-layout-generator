import { createSlice } from '@reduxjs/toolkit';

export const selectedLayoutSlice = createSlice({
    name: 'selectedLayout',
    initialState: '',
    reducers: {
        updateSelectedLayout: (state, action) => {
            return action.payload.key;
        },
    },
});

export const { updateSelectedLayout } = selectedLayoutSlice.actions;

export default selectedLayoutSlice.reducer;