import { ForwardedRef, forwardRef, memo } from 'react';

import { cn } from '@/shared/lib/classNames';

import { Icon } from '../../Icon';
import { IconName, IconType, IIconProps } from '../../Icon/Icon';
import { Button, IButtonProps } from '../Button/Button';

import styles from './IconButton.module.scss';

interface IIconButtonProps<T extends IconType> extends IButtonProps {
  className?: string;
  rounded?: 'full' | 'square';
  variant?: 'default' | 'highlight' | 'bg';
  size?: 'sm' | 'md' | 'lg';
  icon: IIconProps<T>;
  hoverScale?: boolean;
}

const IconButtonInner = <T extends IconType>(
  {
    rounded = 'full',
    size = 'sm',
    variant = 'default',
    icon,
    className,
    hoverScale = false,
    ...props
  }: IIconButtonProps<T>,
  ref?: ForwardedRef<HTMLButtonElement>,
): JSX.Element => {
  const cls = [
    styles.IconButton,
    styles[variant],
    styles[`rounded-${rounded}`],
    styles[size],
    { [styles.hoverScale]: hoverScale },
    className,
  ];

  return (
    <Button className={cn(cls)} ref={ref} {...props}>
      <Icon {...icon} className={styles.icon} />
    </Button>
  );
};
const IconButtonRef = forwardRef(IconButtonInner) as <T extends IconType>(
  props: IIconButtonProps<T> & { ref?: React.ForwardedRef<HTMLButtonElement> },
) => ReturnType<typeof IconButtonInner>;

export const IconButton = memo(IconButtonRef) as <T extends IconType>(
  props: IIconButtonProps<T> & { ref?: React.ForwardedRef<HTMLButtonElement> },
) => ReturnType<typeof IconButtonRef>;
