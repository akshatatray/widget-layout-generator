import { createSlice } from '@reduxjs/toolkit';

export const widgetPanelLayoutSlice = createSlice({
    name: 'widgetPanelLayout',
    initialState: [],
    reducers: {
        updateWidgetPanelLayout: (state, action) => {
            console.log("action: ", action.payload);
            return action.payload.layout;
        },
        appendWidgetPanelLayout: (state, action) => {
            return [...state, action.payload];
        },
    }
});

export const { updateWidgetPanelLayout } = widgetPanelLayoutSlice.actions;

export default widgetPanelLayoutSlice.reducer;
