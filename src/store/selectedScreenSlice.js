import { createSlice } from '@reduxjs/toolkit';

export const selectedScreenSlice = createSlice({
    name: 'selectedScreen',
    initialState: 'home',
    reducers: {
        updateSelectedScreen: (state, action) => {
            console.log("action.payload.key:", action.payload.key);
            return action.payload.key;
        },
    },
});

export const { updateSelectedScreen } = selectedScreenSlice.actions;

export default selectedScreenSlice.reducer;