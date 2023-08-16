import { FC } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Text, TextProps } from '../Text/Text';

interface ISpanProps extends TextProps<'span'> {}

const Span: FC<ISpanProps> = ({ className, ...props }) => {
  return <Text as={'span'} className={cn(className)} color={'subdued'} weight={'normal'} size={'sm'} {...props} />;
};

export default Span;
