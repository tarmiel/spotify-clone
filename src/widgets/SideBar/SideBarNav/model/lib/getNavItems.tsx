import { Icon } from '@/shared/ui/Icon';

import { ISideBarNavItem } from '../types/sideBarNav';

export const useSideBarNavItems = () => {
  const sidebarItemsList: ISideBarNavItem[] = [
    {
      path: '/',
      text: 'Home',
      Icon: <Icon type={'outlined'} name={'Home'} />,
      IconActive: <Icon type={'filled'} name={'Home'} />,
    },
    {
      path: '/search',
      text: 'Search',
      Icon: <Icon type={'outlined'} name={'Search'} />,
      IconActive: <Icon type={'filled'} name={'Search'} />,
    },
  ];

  return sidebarItemsList;
};
