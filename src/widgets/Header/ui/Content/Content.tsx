import React, { FC } from 'react';

interface IContentProps {
  className?: string;
}

export const Content: FC<IContentProps> = ({ className }) => {
  return <div className={className}></div>;
};
