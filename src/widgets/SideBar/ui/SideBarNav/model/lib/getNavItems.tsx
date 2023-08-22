import { Icon } from '@/shared/ui/Icon';

import { ISideBarNavItem } from '../types/sideBarNav';

export const useSideBarNavItems = () => {
  const sidebarItemsList: ISideBarNavItem[] = [
    {
      path: '/',
      text: 'Home',
      inActiveIcon: <Icon type={'outlined'} name={'Home'} width={24} height={24} />,
      activeIcon: <Icon type={'filled'} name={'Home'} width={24} height={24} />,
    },
    {
      path: '/search',
      text: 'Search',
      inActiveIcon: <Icon type={'outlined'} name={'Search'} width={24} height={24} />,
      activeIcon: <Icon type={'filled'} name={'Search'} width={24} height={24} />,
    },
  ];

  return sidebarItemsList;
};
