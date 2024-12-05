import { configureStore } from '@reduxjs/toolkit';
import headerRightLayoutReducer from './headerRightLayoutSlice';
import headerLeftLayoutReducer from './headerLeftLayoutSlice';
import previewStateReducer from './previewStateSlice';
import selectedLayoutReducer from './selectedLayoutSlice';

export default configureStore({
  reducer: {
    headerRightLayout: headerRightLayoutReducer,
    headerLeftLayout: headerLeftLayoutReducer,
    previewState: previewStateReducer,
    selectedLayout: selectedLayoutReducer,
  },
});