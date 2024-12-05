import { configureStore } from '@reduxjs/toolkit';
import headerRightLayoutReducer from './headerRightLayoutSlice';
import headerLeftLayoutReducer from './headerLeftLayoutSlice';

export default configureStore({
  reducer: {
    headerRightLayout: headerRightLayoutReducer,
    headerLeftLayout: headerLeftLayoutReducer,
  },
});