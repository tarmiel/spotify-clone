import { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Text, TextProps } from '../../Text/Text';

import styles from './H1.module.scss';

interface IH1Props extends Omit<TextProps<'h1'>, 'size'> {
  className?: string;
  size?: 'responsive' | 'lg';
}

export const H1: FC<IH1Props> = ({ className, size = 'lg', ...props }) => {
  return (
    <Text as={'h1'} className={cn(styles.H1, styles[size], className)} color={'base'} weight={'extraBold'} {...props} />
  );
};
