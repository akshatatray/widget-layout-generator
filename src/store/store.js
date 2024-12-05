import { configureStore } from '@reduxjs/toolkit';
import headerLayoutReducer from './headerLayoutSlice';
import previewStateReducer from './previewStateSlice';

export default configureStore({
  reducer: { 
    layout: headerLayoutReducer,
    previewState: previewStateReducer
  },
});