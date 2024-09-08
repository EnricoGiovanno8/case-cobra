import { HTMLAttributes } from 'react';

interface ReviewColumnProps {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

export type { ReviewColumnProps, ReviewProps };
