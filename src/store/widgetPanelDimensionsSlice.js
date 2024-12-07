import { createSlice } from '@reduxjs/toolkit';

export const widgetPanelDimensionsSlice = createSlice({
    name: 'widgetPanelDimensions',
    initialState: { width: 0, height: 0 }, // Updated to an object
    reducers: {
        setWidgetPanelDimensions: (state, action) => {
            return { ...state, ...action.payload }; // Update one or both properties
        },
    },
});

export const { setWidgetPanelDimensions } = widgetPanelDimensionsSlice.actions;
export default widgetPanelDimensionsSlice.reducer;
