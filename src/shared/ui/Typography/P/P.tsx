import { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Text, TextProps } from '../Text/Text';

interface IPProps extends TextProps<'p'> {}

export const P: FC<IPProps> = ({ className, ...props }) => {
  return <Text as={'p'} className={cn(className)} color={'base'} weight={'normal'} {...props} />;
};
