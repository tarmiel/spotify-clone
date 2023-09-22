import { CSSProperties, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
  bgColor?: string;
  accentColor?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, borderRadius, bgColor, accentColor } = props;

  const styles = {
    width,
    height,
    borderRadius: borderRadius,
    '--skeleton-bg-base': bgColor,
    '--skeleton-bg-accent': accentColor,
  } as CSSProperties;

  return <div className={cn(cls.Skeleton, {}, [className])} style={styles} />;
});
