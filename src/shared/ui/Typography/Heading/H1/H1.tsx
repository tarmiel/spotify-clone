import { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Text, TextProps } from '../../Text/Text';

import styles from './H1.module.scss';

interface IH1Props extends TextProps<'h1'> {
  className?: string;
}

export const H1: FC<IH1Props> = ({ className, ...props }) => {
  return <Text as={'h1'} className={cn(styles.H1, className)} fontWeight={'extraBold'} {...props} />;
};
