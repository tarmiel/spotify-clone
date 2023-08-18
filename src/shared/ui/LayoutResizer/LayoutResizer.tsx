import React, { ChangeEvent, FC, MouseEventHandler, useCallback, useRef, useState } from 'react';

import { cn } from '@/shared/lib/classNames';

import styles from './LayoutResizer.module.scss';

interface IResizerProps {
  className?: string;
  min: number;
  max: number;
  property: string;
  inline: 'start' | 'end';
  step?: number;
  'data-testid'?: string;
  label?: string;
}

export const LayoutResizer: FC<IResizerProps> = ({
  min,
  max,
  step = 10,
  label,
  inline,
  property,
  className,
  'data-testid': testID,
}) => {
  const [value, setValue] = useState(min);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = React.useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        const a = mouseMoveEvent.clientX - 12;

        if (min <= a && a <= max) {
          setValue(a);
          changeProperty(a);
        }
      }
    },
    [isResizing],
  );

  React.useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  const changeProperty = (val: string | number) => {
    document.documentElement.style.setProperty(property, val + 'px');
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    changeProperty(e.target.value);

    setValue(Number(e.target.value));
  };
  return (
    <div
      data-testid={testID}
      className={cn(styles.LayoutResizer, styles[inline], className)}
      onMouseDown={startResizing}
      style={{ zIndex: 1 }}
    >
      <label className="hidden-visually">
        {label}
        <input
          className={styles.input}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChangeValue}
          onFocus={() => console.log('focus')}
        />
      </label>
    </div>
  );
};
