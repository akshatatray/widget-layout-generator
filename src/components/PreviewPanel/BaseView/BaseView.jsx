

import { NavBlock } from '../NavBlock/NavBlock';
import Tasks from '../TaskBlock/index.jsx';
import { AdvancedHeader } from '../AdvancedHeader/AdvancedHeader.jsx';
import { iconDetails } from '../../../constants/constants.tsx';
import CommonControl from '../CommonControlBlock/index.jsx';
import ContactHistory from '../ContactHistoryBlock/index.jsx';

export const BaseView = () => {
    return {
      blocks: {
        header: AdvancedHeader(),
        nav: NavBlock({ title: "Navigation", icons: iconDetails }),
        tasks: Tasks(),
        commonControl: CommonControl(),
        contactHistory: ContactHistory(),
      },
    };
  };
