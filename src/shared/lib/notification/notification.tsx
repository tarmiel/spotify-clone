import { toast, ToastContent, ToastOptions } from 'react-toastify';

import styles from './notification.module.scss';

export type NotificationType = 'error' | 'success' | 'warning' | 'info';

interface Notification<TData = unknown> {
  type: NotificationType;
  content: ToastContent<TData>;
  options?: ToastOptions;
}

export const showNotification = ({ type, content, options }: Notification) =>
  toast[type](content, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    className: styles.notification,
    ...options,
  });
