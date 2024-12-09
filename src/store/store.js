import { configureStore } from '@reduxjs/toolkit';
import headerLeftLayoutReducer from './headerLeftLayoutSlice';
import headerRightLayoutReducer from './headerRightLayoutSlice';
import navBarLayoutReducer from './navBarLayoutSlice';
import selectedScreenReducer from './selectedScreenSlice';
import selectedWidgetReducer from './selectedWidgetSlice';
import previewStateReducer from './previewStateSlice';
import selectedLayoutReducer from './selectedLayoutSlice';
import widgetPanelDimensionsReducer from './widgetPanelDimensionsSlice';
import widgetPanelLayoutReducer from './widgetPanelLayoutSlice';

export default configureStore({
  reducer: {
    headerRightLayout: headerRightLayoutReducer,
    headerLeftLayout: headerLeftLayoutReducer,
    previewState: previewStateReducer,
    selectedLayout: selectedLayoutReducer,
    widgetPanelDimensions: widgetPanelDimensionsReducer,
    widgetPanelLayout: widgetPanelLayoutReducer,
    selectedWidget: selectedWidgetReducer,
    selectedScreen: selectedScreenReducer,
    navBarLayout: navBarLayoutReducer
  },
});