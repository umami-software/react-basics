import { FunctionComponent, SVGProps } from 'react';

import Alert from '../assets/alert.svg';
import ArrowRight from '../assets/arrow-right.svg';
import Check from '../assets/check.svg';
import ChevronDown from '../assets/chevron-down.svg';
import Close from '../assets/close.svg';
import Copy from '../assets/copy.svg';
import Edit from '../assets/edit.svg';
import External from '../assets/external.svg';
import Hide from '../assets/hide.svg';
import Logout from '../assets/logout.svg';
import Menu from '../assets/menu.svg';
import Minus from '../assets/minus.svg';
import More from '../assets/more.svg';
import Plus from '../assets/plus.svg';
import Refresh from '../assets/refresh.svg';
import Search from '../assets/search.svg';
import Show from '../assets/show.svg';
import Trash from '../assets/trash.svg';

export interface SVGIconComponent extends FunctionComponent<SVGProps<SVGSVGElement>> {
  title?: string;
}

export const Icons: { [key: string]: SVGIconComponent } = {
  Alert,
  ArrowRight,
  Check,
  ChevronDown,
  Close,
  Copy,
  Edit,
  External,
  Hide,
  Logout,
  Menu,
  Minus,
  More,
  Plus,
  Refresh,
  Search,
  Show,
  Trash,
};

export default Icons;
