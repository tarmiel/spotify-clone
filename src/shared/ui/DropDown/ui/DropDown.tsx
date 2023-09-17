import React, { FC, Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';

import { cn } from '@/shared/lib/classNames';

import AppLink from '../../AppLink/AppLink';
import { IconButton } from '../../Button';

import styles from './DropDown.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
  divide?: boolean;
}

interface IDropDownProps {
  className?: string;
  trigger: JSX.Element;
  items: DropdownItem[];
  direction?: DropdownDirection;
}
export type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
  'top right': styles.optionsTopRight,
  'top left': styles.optionsTopLeft,
};

export const DropDown: FC<IDropDownProps> = ({ trigger, items, direction = 'bottom left', className }) => {
  return (
    <Menu as={'div'} className={cn(styles.Dropdown, className)}>
      <Menu.Button as={Fragment}>{trigger}</Menu.Button>
      <Menu.Items as={'ul'} className={cn(styles.items, mapDirectionClass[direction])}>
        {items.map((item, index) => (
          <Menu.Item as={'li'} key={`dropdown-key-${index}`} disabled={item.disabled}>
            {({ active, disabled }) => {
              const cls = [
                styles.item,
                {
                  [styles.active]: active,
                  [styles.disabled]: disabled,
                  [styles.divide]: item.divide,
                },
              ];

              return (
                <>
                  {item.href ? (
                    <AppLink to={item.href} className={cn(cls)}>
                      {item.content}
                    </AppLink>
                  ) : (
                    <button type="button" onClick={item.onClick} className={cn(cls)}>
                      {item.content}
                    </button>
                  )}
                </>
              );
            }}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default DropDown;
