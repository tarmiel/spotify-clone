import React, { ReactNode } from 'react';

export interface ISideBarNavItem {
  path: string;
  text: string;
  Icon: ReactNode;
  IconActive?: ReactNode;
  authOnly?: boolean;
}
