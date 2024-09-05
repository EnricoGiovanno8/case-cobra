import { ReactNode } from 'react';

type MaxWidthWrapperPropsType = {
  className?: string;
  children: ReactNode;
};

type MaxWidthWrapperType = (props: MaxWidthWrapperPropsType) => ReactNode;

export type { MaxWidthWrapperType };
