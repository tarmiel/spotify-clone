import { CSSProperties, FC, Fragment, MouseEvent, ReactNode, useState } from 'react';
import { Menu } from '@headlessui/react';

import { cn } from '@/shared/lib/classNames';

import AppLink from '../../AppLink/AppLink';
import { ContextMenuItem, MenuPosition } from '../model/types/contextmenu';

import styles from './ContextMenu.module.scss';

interface IContextMenuProps {
  className?: string;
  children: ReactNode;
  items: ContextMenuItem[];
  menuPosition?: MenuPosition;
}

export const mapPositionClass: Record<MenuPosition, string> = {
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
  'top right': styles.optionsTopRight,
  'top left': styles.optionsTopLeft,
};

const mapPositionStyle: Record<MenuPosition, (x: number, y: number) => CSSProperties> = {
  'bottom left': (x, y) => ({
    top: y,
    right: x,
  }),
  'bottom right': (x, y) => ({
    top: y,
    left: x,
  }),
  'top right': (x, y) => ({
    bottom: y,
    left: x,
  }),
  'top left': (x, y) => ({
    bottom: y,
    right: x,
  }),
};

export const ContextMenu: FC<IContextMenuProps> = ({ items, children, menuPosition = 'bottom right', className }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.click();
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const style = mapPositionStyle[menuPosition](position.x, position.y);

  return (
    <Menu as={'div'} className={cn(styles.ContextMenu, className)}>
      {({ open }) => (
        <>
          <Menu.Button as={'div'} onContextMenu={handleContextMenu}>
            <div onClick={(e) => !open && e.stopPropagation()}>{children}</div>
          </Menu.Button>
          <Menu.Items as={'ul'} className={cn(styles.items)} style={style}>
            {items.map((item, index) => (
              <Menu.Item as={'li'} key={`menu-key-${index}`} disabled={item.disabled}>
                {({ active, disabled, close }) => {
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
                        <AppLink to={item.href} className={cn(cls)} onClick={close}>
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
        </>
      )}
    </Menu>
  );
};
