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
        deleteWidgetPanelLayout: (state, action) => {
            return state.filter((layout) => layout.i !== action.payload);
        },
        updateWidgetPanelLayoutLabel: (state, action) => {
            return state.map((layout) => {
                if (layout.i === action.payload.id) {
                    return {
                        ...layout,
                        label: action.payload.label,
                    };
                }
                return layout;
            });
        }
    }
});

export const {
    updateWidgetPanelLayout,
    appendWidgetPanelLayout,
    deleteWidgetPanelLayout,
    updateWidgetPanelLayoutLabel
} = widgetPanelLayoutSlice.actions;

export default widgetPanelLayoutSlice.reducer;
