import { ReactNode } from 'react';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
  divide?: boolean;
}
export type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right';
