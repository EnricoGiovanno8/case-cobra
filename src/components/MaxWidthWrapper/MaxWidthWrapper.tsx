import React from 'react';
import type { MaxWidthWrapperType } from './MaxWidthWrapper.types';
import { cn } from '@/lib/utils';

const MaxWidthWrapper: MaxWidthWrapperType = ({ className, children }) => {
  return (
    <div className={cn('h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
