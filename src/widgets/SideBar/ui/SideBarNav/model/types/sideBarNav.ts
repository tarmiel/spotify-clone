import { ReactNode } from 'react';

export interface ISideBarNavItem {
  path: string;
  text: string;
  inActiveIcon: ReactNode;
  activeIcon?: ReactNode;
}
