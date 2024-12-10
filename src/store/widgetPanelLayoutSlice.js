import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    widgetPanelLayout: {
        'home': [],
        'analysis': [],
    },
};

export const widgetPanelLayoutSlice = createSlice({
    name: 'widgetPanelLayout',
    initialState,
    reducers: {
        updateWidgetPanelLayout: (state, action) => {
            const { screenName, widgets } = action.payload;
            state.widgetPanelLayout[screenName] = widgets;
        },
        appendWidgetPanelLayout: (state, action) => {
            const { screenName, widget } = action.payload;
            if (!state.widgetPanelLayout[screenName]) {
                state.widgetPanelLayout[screenName] = [];
            }
            state.widgetPanelLayout[screenName].push(widget);
        },
        deleteWidgetPanelLayout: (state, action) => {
            const { screenName, widgetId } = action.payload;
            if (state.widgetPanelLayout[screenName]) {
                state.widgetPanelLayout[screenName] = state.widgetPanelLayout[screenName].filter(
                    (widget) => widget.i !== widgetId
                );
            }
        },
        updateWidgetPanelLayoutLabel: (state, action) => {
            const { screenName, widgetId, newLabel, newAppName } = action.payload;
            if (state.widgetPanelLayout[screenName]) {
                const widget = state.widgetPanelLayout[screenName].find((widget) => widget.i === widgetId);
                if (widget) {
                    widget.label = newLabel;
                    widget.appName = newAppName;
                }
            }
        },
        addNewScreen: (state, action) => {
            const { screenName } = action.payload;
            if (!state.widgetPanelLayout[screenName]) {
                state.widgetPanelLayout[screenName] = [];
            }
        },
        renameScreen: (state, action) => {
            const { oldScreenName, newScreenName } = action.payload;
            if (state.widgetPanelLayout[oldScreenName] && !state.widgetPanelLayout[newScreenName]) {
                state.widgetPanelLayout[newScreenName] = state.widgetPanelLayout[oldScreenName];
                delete state.widgetPanelLayout[oldScreenName];
            }
        },
        deleteScreen: (state, action) => {
            const { screenName } = action.payload;
            if (state.widgetPanelLayout[screenName]) {
                delete state.widgetPanelLayout[screenName];
            }
        },
    }
});

export const {
    updateWidgetPanelLayout,
    appendWidgetPanelLayout,
    deleteWidgetPanelLayout,
    updateWidgetPanelLayoutLabel,
    addNewScreen,
    renameScreen,
    deleteScreen,
} = widgetPanelLayoutSlice.actions;

export default widgetPanelLayoutSlice.reducer;
