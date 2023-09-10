import React, { ComponentProps, FC, useEffect } from 'react';
import { FieldValues, Path, SubmitHandler, useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { cn } from '@/shared/lib/classNames';

interface IFormProps<TFormValues extends FieldValues, Schema>
  extends Omit<ComponentProps<'form'>, 'onSubmit' | 'children'> {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
  errors?: TExternalFormError<TFormValues>[];
}

export type TExternalFormError<TFormValues extends FieldValues> = {
  field: Path<TFormValues>;
  type: string;
  message: string;
};

export const Form = <TFormValues extends FieldValues, Schema extends ZodSchema<any>>({
  children,
  options,
  schema,
  onSubmit,
  errors,
  id,
  className,
}: IFormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({ ...options, resolver: schema && zodResolver(schema) });
  useEffect(() => {
    errors?.forEach((error) => {
      methods.setError(error.field, {
        type: error.type,
        message: error.message,
      });
    });
  }, [errors]);
  return (
    <form className={cn(className)} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      {children(methods)}
    </form>
  );
};
