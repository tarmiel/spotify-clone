import { CSSProperties, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps extends CSSProperties {
  className?: string;
  height?: string | number;
  width?: string | number;
  bgColor?: string;
  accentColor?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, bgColor, accentColor, ...inline } = props;

  const styles = {
    width,
    height,
    '--skeleton-bg-base': bgColor,
    '--skeleton-bg-accent': accentColor,
    ...inline,
  } as CSSProperties;

  return <div className={cn(cls.Skeleton, {}, [className])} style={styles} />;
});
