

import { NavBlock } from '../NavBlock/NavBlock';
import Tasks from '../TaskBlock/index.jsx';
import { AdvancedHeader } from '../AdvancedHeader/AdvancedHeader.jsx';
import { iconDetails } from '../../../constants/constants.tsx';
import CommonControl from '../CommonControlBlock/index.jsx';
import Title from '../TitleHeader/index.jsx';
import InteractionBlock from '../InteractionControl/InteractionControl.jsx';
import WidgetPanel from '../Panels/WidgetPanel/WidgetPanel.jsx';
import ControlPanel from '../Panels/ControlPanel/controlPanel.jsx';

export const BaseView = () => {
    return {
      blocks: {
        title: Title({}),
        header: AdvancedHeader({}),
        nav: NavBlock({ title: "Navigation", icons: iconDetails }),
        tasks: Tasks({}),
        commonControl: CommonControl({}),
        interactionBlock: InteractionBlock({}),
        widgetPanel: WidgetPanel({}),
        controlPanel: ControlPanel({}),
      },
    };
  };
