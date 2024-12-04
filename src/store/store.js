import { configureStore } from '@reduxjs/toolkit';
import headerLayoutReducer from './headerLayoutSlice';

export default configureStore({
  reducer: {   layout : headerLayoutReducer },
});