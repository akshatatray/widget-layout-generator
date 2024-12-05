import { iconDetails } from '../../constants/constants.tsx';
import { AdvancedHeader } from '../AdvancedHeader/AdvancedHeader';
import CommonControl from '../PreviewPanel/EmptyBlock/index.jsx';
import ContactHistory from '../PreviewPanel/ContactHistoryBlock/index.jsx';
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
