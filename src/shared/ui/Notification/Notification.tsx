import { Fragment, memo, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

import { cn } from '@/shared/lib/classNames';

import { IconButton } from '../Button';
import { Icon } from '../Icon';

import styles from './Notification.module.scss';

const icons = {
  info: <Icon type={'outlined'} name={'InfoCircle'} className={styles.icon} aria-hidden="true" />,
  success: <Icon type={'outlined'} name={'CheckCircle'} className={styles.icon} aria-hidden="true" />,
  warning: <Icon type={'outlined'} name={'ExclamationCircle'} className={styles.icon} aria-hidden="true" />,
  error: <Icon type={'outlined'} name={'ExclamationCircle'} className={styles.icon} aria-hidden="true" />,
};

export interface Notification {
  id: string;
  show?: boolean;
  type: keyof typeof icons;
  message: string;
}

export type NotificationProps = {
  className?: string;
  notification: Notification;
  onDismiss: (id: string) => void;
};

const notificationAnimation = {
  enter: styles.enter,
  enterFrom: styles.enterFrom,
  enterTo: styles.enterTo,
  leave: styles.leave,
  leaveFrom: styles.leaveFrom,
  leaveTo: styles.leaveTo,
};

export const Notification = ({
  notification: { id, type, message, show = true },
  onDismiss,
  className,
}: NotificationProps) => {
  return (
    <Transition as={Fragment} appear={true} show={show} {...notificationAnimation}>
      <div className={cn(styles.Notification, styles[type], className)} role="alert">
        <div className={styles.notificationContainer}>
          <div className={styles.iconWrapper}>{icons[type]}</div>
          <div className={styles.messageWrapper}>
            <p>{message}</p>
          </div>
          <div className={styles.buttonWraper}>
            <button
              onClick={() => {
                onDismiss(id);
              }}
            >
              <Icon type={'outlined'} name={'X'} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
};
