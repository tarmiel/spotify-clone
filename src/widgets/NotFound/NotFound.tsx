import React, { FC } from 'react';

import { cn } from '@/shared/lib/classNames';
import { Icon } from '@/shared/ui/Icon';
import { H1, P } from '@/shared/ui/Typography';

import styles from './NotFound.module.scss';

interface INotFoundProps {
  className?: string;
  title?: string;
  subTitle?: string;
}

export const NotFound: FC<INotFoundProps> = ({ title, subTitle, className }) => {
  return (
    <div className={cn(styles.NotFound, className)}>
      <Icon type={'filled'} name={'LogoPrimary'} width={60} height={60} />
      <div>
        <H1 size={'lg'}>{title || 'Not Found'}</H1>
        <P color={'subdued'}>{subTitle || 'We can’t seem to find the content you are looking for.'}</P>
      </div>
    </div>
  );
};
