import { FC } from 'react';

import { Text, TextProps } from '../../Text/Text';

import styles from './H2.module.scss';

interface IH2Props extends TextProps<'h2'> {}

export const H2: FC<IH2Props> = (props) => {
  return <Text as={'h2'} className={styles.H2} fontWeight={'bold'} fontSize={'lg'} {...props} />;
};
