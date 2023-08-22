import React, { FC, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './SideBarBlock.module.scss';
interface ISideBarBlockProps {
  className?: string;
  children?: ReactNode;
}

const SideBarBlock: FC<ISideBarBlockProps> = ({ children, className }) => {
  return <div className={cn(styles.SideBarBlock, className)}>{children}</div>;
};

export default SideBarBlock;
