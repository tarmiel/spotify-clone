import React, { FC, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './SideBarSubBlock.module.scss';

interface ISideBarBlockProps {
  className?: string;
  children?: ReactNode;
}

export const SideBarSubBlock: FC<ISideBarBlockProps> = ({ children, className }) => {
  return <div className={cn(styles.SideBarSubBlock, className)}>{children}</div>;
};
