import { cn } from '@/shared/lib/classNames';

import { Icon } from '../../Icon';
import { IconName, IconType } from '../../Icon/Icon';
import { Button, IButtonProps } from '../Button/Button';

import styles from './IconButton.module.scss';

interface IIconButtonProps<T extends IconType> extends IButtonProps {
  className?: string;
  rounded?: 'full' | 'square';
  variant?: 'default' | 'highlight' | 'bg';
  size?: 'sm' | 'md' | 'lg';
  icon: {
    type: T;
    name: IconName<T>;
  };
  hoverScale?: boolean;
}

export const IconButton = <T extends IconType>({
  rounded = 'full',
  size = 'sm',
  variant = 'default',
  icon,
  className,
  hoverScale = false,
  ...props
}: IIconButtonProps<T>): JSX.Element => {
  const cls = [
    styles.IconButton,
    styles[variant],
    styles[`rounded-${rounded}`],
    styles[size],
    { [styles.hoverScale]: hoverScale },
    className,
  ];

  return (
    <Button className={cn(cls)} {...props}>
      <Icon {...icon} className={styles.icon} />
    </Button>
  );
};
