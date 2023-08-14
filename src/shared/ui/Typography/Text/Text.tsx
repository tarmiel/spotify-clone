import React, { ElementType, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './Text.module.scss';

export type TextProps<T extends ElementType> = {
  className?: string;
  children: ReactNode;
  as?: T;
  color?: 'base' | 'subdued' | 'bright' | 'negative' | 'warning' | 'positive' | 'announcement';
  fontWeight?: 'normal' | 'bold' | 'extraBold';
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  textAlign?: 'left' | 'right' | 'center' | 'justify';
};

type ElementRef<C extends ElementType> = React.ComponentPropsWithRef<C>['ref'];

type PolymorphicComponentProp<T extends React.ElementType> = React.PropsWithChildren<TextProps<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>;

type TextComponentProps<T extends ElementType> = PolymorphicComponentProp<T> & {
  ref?: ElementRef<T>;
};

type TextComponent = <C extends ElementType>(props: TextComponentProps<C>) => ReactNode;

export const Text: TextComponent = React.forwardRef(
  <C extends ElementType = 'p'>(
    { as, children, color, fontWeight, fontSize, textAlign, className, ...props }: TextComponentProps<C>,
    ref?: ElementRef<C>,
  ) => {
    const Component = as ?? 'p';

    const classes = [
      styles.Text,
      color && styles[color],
      fontWeight && styles[fontWeight],
      fontSize && styles[fontSize],
      textAlign && styles[textAlign],
      className,
    ];

    return (
      <Component {...props} className={cn(classes)} ref={ref}>
        {children}
      </Component>
    );
  },
);
