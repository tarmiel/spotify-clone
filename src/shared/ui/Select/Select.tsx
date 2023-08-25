import React, { Fragment, ReactNode, useMemo } from 'react';
import { Listbox } from '@headlessui/react';

import { cn } from '@/shared/lib/classNames';

import { ClearButton } from '../Button/ClearButton/ClearButton';
import { Icon } from '../Icon';

import styles from './Select.module.scss';

type SelectPlacement = 'top-start' | 'bottom-start';

export interface ISelectItem<T extends string> {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ISelectProps<T extends string> {
  className?: string;
  value?: string;
  defaultValue?: string;
  items?: ISelectItem<T>[];
  onChange?: (value: T) => void;
  placement?: SelectPlacement;
  readonly?: boolean;
  label?: string;
}

export function Select<T extends string>(props: ISelectProps<T>) {
  const { className, value, defaultValue, items, onChange, readonly, label } = props;

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.value === value);
  }, [items, value]);

  return (
    <Listbox as={'div'} value={value} onChange={onChange} className={cn(styles.Select, className)}>
      {({ open }) => (
        <>
          <Listbox.Button as={ClearButton} withIcon className={styles.triggerBtn}>
            <span className={styles.content}>{selectedItem?.content ?? defaultValue}</span>
            {open ? (
              <Icon type={'filled'} name={'DropDown'} style={{ transform: 'rotate(180deg)', flexShrink: 0 }} />
            ) : (
              <Icon type={'filled'} name={'DropDown'} style={{ flexShrink: 0 }} />
            )}
          </Listbox.Button>
          <Listbox.Options className={cn(styles.options)}>
            {label && <span className={styles.label}>{label}</span>}
            {items?.map((item) => (
              <Listbox.Option key={item.value} value={item.value} disabled={item.disabled} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={cn(styles.option, {
                      [styles.active]: active,
                      [styles.disabled]: item.disabled,
                      [styles.selected]: selected,
                    })}
                    tabIndex={0}
                  >
                    <span className={styles.content}>{item.content}</span>
                    {selected && (
                      <Icon
                        type={'outlined'}
                        name={'Selected'}
                        width={16}
                        height={16}
                        className={styles.selectedIcon}
                      />
                    )}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
}

export default Select;
