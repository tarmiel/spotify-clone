import { forwardRef, HTMLAttributes, PropsWithChildren, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { cn } from '@/shared/lib/classNames';
import { useEscape } from '@/shared/lib/hooks/useEscape/useEscape';
import { useLockedBody } from '@/shared/lib/hooks/useLockedBody/useLockedBody';

import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal/Portal';

import styles from './Modal.module.scss';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  close: () => void;
}

export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(
  ({ isOpen, close, children, className, ...props }, ref) => {
    const nodeRef = useRef(null);

    // useLockedBody(isOpen);

    useEscape(close);

    return (
      <CSSTransition
        in={isOpen}
        nodeRef={ref ?? nodeRef}
        timeout={300}
        unmountOnExit
        classNames={{
          appear: styles.appear,
          appearActive: styles.appearActive,
          appearDone: styles.appearDone,
          enter: styles.enter,
          enterActive: styles.enterActive,
          enterDone: styles.enterDone,
          exit: styles.exit,
          exitActive: styles.exitActive,
          exitDone: styles.exitDone,
        }}
      >
        <Portal root="#app">
          {
            <div className={cn(styles.Modal, className)} ref={ref ?? nodeRef} {...props}>
              <Overlay onClick={close} />
              <div className={styles.content}>{children}</div>
            </div>
          }
        </Portal>
      </CSSTransition>
    );
  },
);
