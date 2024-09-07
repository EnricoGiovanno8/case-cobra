import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';
import { PhoneProps } from './Phone.types';
import Images from '../../assets/Images';
import Image from 'next/image';

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps): ReactNode => {
  return (
    <div className={cn('relative pointer-events-none z-50 overflow-hidden', className)} {...props}>
      <Image
        src={dark ? Images.phoneTemplateDark : Images.phoneTemplateWhite}
        alt="phone image"
        className="pointer-events-none z-50 select-none"
      />

      <div className="absolute -z-10 inset-0">
        <Image className="object-cover" src={imgSrc} alt="overlaying phone image" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Phone;
