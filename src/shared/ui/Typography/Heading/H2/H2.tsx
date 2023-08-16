import { FC } from 'react';

import { Text, TextProps } from '../../Text/Text';

interface IH2Props extends TextProps<'h2'> {}

export const H2: FC<IH2Props> = (props) => {
  return <Text as={'h2'} weight={'bold'} size={'lg'} {...props} />;
};
