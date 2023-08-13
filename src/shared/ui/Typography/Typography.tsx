import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './Typography.module.scss';

type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subheading1'
  | 'subheading2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4';
type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const variantsMapping: Record<TextVariant, TextType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'span',
  body4: 'span',
};

interface ITextOwnProps {
  className?: string;
  children: ReactNode;
  variant?: TextVariant;
  color?: 'base' | 'subdued' | 'bright' | 'negative' | 'warning' | 'positive' | 'announcement';
  fontWeight?: 'normal' | 'bold' | 'extraBold';
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

type TextProps = ITextOwnProps & Omit<ComponentPropsWithoutRef<'p'>, keyof ITextOwnProps>;

export const Text = forwardRef(
  (
    { children, variant = 'body1', fontWeight, textAlign, color, className, ...props }: TextProps,
    ref?: ForwardedRef<HTMLParagraphElement>,
  ) => {
    const Tag = variantsMapping[variant];

    const classes = [
      styles.Typography,
      styles[variant],
      fontWeight && styles[fontWeight],
      textAlign && styles[textAlign],
      color && styles[color],
      className,
    ];

    return (
      <Tag {...props} className={cn(classes)} ref={ref}>
        {children}
      </Tag>
    );
  },
);
