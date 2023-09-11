import React, { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { cn } from '@/shared/lib/classNames';

import styles from './AppLink.module.scss';

interface IAppLinkProps extends LinkProps {
  className?: string;
  variant?: 'base' | 'subdued';
  bold?: boolean;
  underline?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  truncate?: boolean;
  children?: ReactNode;
}

const AppLink: FC<IAppLinkProps> = ({
  to,
  children,
  variant,
  size = 'md',
  underline,
  truncate,
  bold,
  className,
  ...props
}) => {
  const cls = [
    styles.AppLink,
    variant && styles[variant],
    styles[size],
    className,
    {
      [styles.underline]: underline,
      [styles.bold]: bold,
      [styles.truncate]: truncate,
    },
  ];

  return (
    <Link to={to} className={cn(cls)} {...props}>
      {children}
    </Link>
  );
};

export default AppLink;
