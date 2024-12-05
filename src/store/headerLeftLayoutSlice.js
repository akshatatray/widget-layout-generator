import { createSlice } from '@reduxjs/toolkit';
import { initialLeftHeaderLayout } from './initialLeftHeaderLayout';

export const headerLeftLayoutSlice = createSlice({
    name: 'headerLeftLayout',
    initialState: initialLeftHeaderLayout,
    reducers: {
        updateImage: (state, action) => {
            const logo = state.find(item => item.name === 'logo');
            if (logo) {
                logo.source = action.payload.source;
            }
        },
        updateTitle: (state, action) => {
            const title = state.find(item => item.name === 'title');
            if (title) {
                title.title = action.payload.title;
            }
        },
    },
});

export const { updateImage, updateTitle } = headerLeftLayoutSlice.actions;

export default headerLeftLayoutSlice.reducer;
