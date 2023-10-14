import { ReactNode } from 'react';

export interface ContextMenuItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
  divide?: boolean;
}

export type MenuPosition = 'top left' | 'top right' | 'bottom left' | 'bottom right';
