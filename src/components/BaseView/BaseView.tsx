import { iconDetails } from '../../constants/constants.tsx';
import { AdvancedHeader } from '../AdvancedHeader/AdvancedHeader.tsx';
import { NavBlock } from '../NavBlock/NavBlock.tsx';
import style from "./BaseView.scss";


export const BaseView = () => {
    return {
      blocks: {
        header: AdvancedHeader(),
        nav: NavBlock({ title: "Navigation", icons: iconDetails }),
      },
      styles: style
    };
  };
