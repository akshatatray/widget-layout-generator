import { configureStore } from '@reduxjs/toolkit';
import headerRightLayoutReducer from './headerRightLayoutSlice';
import headerLeftLayoutReducer from './headerLeftLayoutSlice';
import previewStateReducer from './previewStateSlice';

export default configureStore({
  reducer: {
    headerRightLayout: headerRightLayoutReducer,
    headerLeftLayout: headerLeftLayoutReducer,
    previewState: previewStateReducer
  },
});