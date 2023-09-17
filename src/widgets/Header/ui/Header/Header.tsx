import { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Actions } from '../Actions/Actions';
import { Content } from '../Content/Content';
import { Controls } from '../Controls/Controls';

import styles from './Header.module.scss';

interface IHeaderProps {
  className?: string;
}

const Header: FC<IHeaderProps> = ({ className }) => {
  return (
    <header className={cn(styles.Header, className)}>
      <div className={styles.back}></div>
      <Controls />
      <Content />
      <Actions />
    </header>
  );
};

export default Header;
