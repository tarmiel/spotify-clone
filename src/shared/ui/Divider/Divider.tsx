import React, { FC, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './Divider.module.scss';

interface IDividerProps {
  children?: ReactNode;
  className?: string;
}

const Divider: FC<IDividerProps> = ({ children, className }) => {
  return (
    <div className={cn(styles.Divider, className)}>
      <hr className={styles.line} />
      {children && <span className={styles.content}>{children}</span>}
      <hr className={styles.line} />
    </div>
  );
};

export default Divider;
