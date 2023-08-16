import React, { ElementType, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './Text.module.scss';

type TColor = 'base' | 'subdued' | 'inverted' | 'bright' | 'negative' | 'warning' | 'positive' | 'announcement';
type TWeight = 'normal' | 'bold' | 'extraBold';
type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TextOwnProps<T extends ElementType> = {
  children: ReactNode;
  className?: string;
  as?: T;
  color?: TColor;
  weight?: TWeight;
  size?: TSize;
  truncate?: boolean;
  nowrap?: boolean;
  italic?: boolean;
  title?: string;
};

type ElementRef<C extends ElementType> = React.ComponentPropsWithRef<C>['ref'];

type PolymorphicComponentProp<T extends React.ElementType> = React.PropsWithChildren<TextOwnProps<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextOwnProps<T>>;

export type TextProps<T extends ElementType> = PolymorphicComponentProp<T> & {
  ref?: ElementRef<T>;
};

type TextComponent = <C extends ElementType>(props: TextProps<C>) => ReactNode;

export const Text: TextComponent = React.forwardRef(
  <C extends ElementType>(
    { as, children, color, weight, size, italic, truncate, nowrap, className, ...props }: TextProps<C>,
    ref?: ElementRef<C>,
  ) => {
    const Component = as ?? 'span';

    const cls1 = [styles.Text, color && styles[color], weight && styles[weight], size && styles[size], className];

    const cls2 = {
      [styles.truncate]: truncate,
      [styles.nowrap]: nowrap,
      [styles.italic]: italic,
    };

    return (
      <Component className={cn(cls1, cls2)} ref={ref} {...props}>
        {children}
      </Component>
    );
  },
);
