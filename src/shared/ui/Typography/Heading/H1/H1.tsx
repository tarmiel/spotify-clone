import { FC } from 'react';

import { Text, TextProps } from '../../Text/Text';

import styles from './H1.module.scss';

interface IH1Props extends TextProps<'h1'> {}

export const H1: FC<IH1Props> = (props) => {
  return <Text as={'h1'} className={styles.H1} fontWeight={'extraBold'} {...props} />;
};
