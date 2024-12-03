import { iconDetails } from '../../constants/constants.tsx';
import { AdvancedHeader } from '../AdvancedHeader/AdvancedHeader';
import CommonControl from '../CommonControlBlock/index.jsx';
import ContactHistory from '../ContactHistoryBlock/index.jsx';
import { NavBlock } from '../NavBlock/NavBlock';
import Tasks from '../TaskBlock/index.jsx';

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
