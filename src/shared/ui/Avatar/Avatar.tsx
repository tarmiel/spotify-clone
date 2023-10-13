import { CSSProperties, ReactElement, useMemo } from 'react';

import { cn } from '../../lib/classNames/classNames';
import { AppImage } from '../AppImage';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number | string;
  alt?: string;
  rounded?: 'full' | 'sm';
  fallBackIcon?: ReactElement;
}

export const Avatar = ({ className, src, size = '100%', alt, fallBackIcon, rounded }: AvatarProps) => {
  const styles = {
    width: size,
    height: size,
    // width: size || '100%',
    // height: size || '100%',
  };

  //   const fallback = <Skeleton width={size} height={size} border="50%" />;
  const fallback = '';

  return (
    <AppImage
      fallback={fallback}
      errorFallback={fallBackIcon}
      src={src}
      alt={alt}
      style={styles}
      className={cn(cls.Avatar, className, rounded && cls[`rounded-${rounded}`])}
    />
  );
};
