import { memo, ReactElement } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { LayoutResizer } from '@/shared/ui/LayoutResizer/LayoutResizer';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  content?: ReactElement;
  header?: ReactElement;
  sidebar?: ReactElement;
  rightbar?: ReactElement;
  footer?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, content, rightbar, footer, header, sidebar } = props;

  return (
    <div className={cn(styles.MainLayout, className)} data-right-sidebar-hidden="true">
      <div className={styles.sidebar}>
        {sidebar}
        <LayoutResizer min={280} max={1000} inline={'end'} property={'--left-sidebar-width'} />
      </div>
      <div className={styles.header}>{header}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.rightbar}>{rightbar}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
});
