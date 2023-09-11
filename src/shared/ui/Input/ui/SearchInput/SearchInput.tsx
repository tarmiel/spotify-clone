import React, { ChangeEvent, FC, useState } from 'react';

import { cn } from '@/shared/lib/classNames';
import { IconButton } from '@/shared/ui/Button/IconButton/IconButton';
import { Icon } from '@/shared/ui/Icon';

import { BaseInput, IBaseInputProps } from '../BaseInput/BaseInput';

import styles from './SearchInput.module.scss';

interface ISearchInputProps extends IBaseInputProps {
  value?: string;
  setValue?: (value: string) => void;
}

export const SearchInput: FC<ISearchInputProps> = ({ value, setValue, className, ...props }) => {
  const handleClear = () => {
    setValue?.('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue?.(e.target.value);
  };

  const clearBtn = value ? (
    <IconButton onClick={handleClear} icon={{ type: 'outlined', name: 'X' }} size={'sm'} />
  ) : undefined;

  return (
    <BaseInput
      value={value}
      onChange={onChange}
      className={cn(styles.SearchInput, className)}
      rounded={'lg'}
      addonLeft={<Icon type={'outlined'} name={'Search'} width={16} height={16} />}
      addonRight={clearBtn}
      {...props}
    />
  );
};
