import { createSlice } from '@reduxjs/toolkit';

export const selectedWidgetSlice = createSlice({
    name: 'selectedWidget',
    initialState: '',
    reducers: {
        updateSelectedWidget: (state, action) => {
            console.log("action.payload.key:", action.payload.key);
            return action.payload.key;
        },
    },
});

export const { updateSelectedWidget } = selectedWidgetSlice.actions;

export default selectedWidgetSlice.reducer;