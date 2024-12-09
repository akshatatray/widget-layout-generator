

import { AdvancedHeader } from '../AdvancedHeader/AdvancedHeader.jsx';
import EmptyBlock from '../EmptyBlock/index.jsx';
import InteractionBlock from '../InteractionControl/InteractionControl.jsx';
import { NavBlock } from '../NavBlock/NavBlock';
import ControlPanel from '../Panels/ControlPanel/controlPanel.jsx';
import Tasks from '../TaskBlock/index.jsx';
import Title from '../TitleHeader/index.jsx';

export const BaseView = () => {
    return {
      blocks: {
        title: Title({}),
        header: AdvancedHeader({}),
        nav: NavBlock({ title: "Navigation"}),
        tasks: Tasks({}),
        emptyBlock: EmptyBlock({}),
        interactionBlock: InteractionBlock({}),
        controlPanel: ControlPanel({}),
      },
    };
  };
