import React from 'react';
import NextImage from 'next/image';
import { ImageProps } from './Image.types';

const Image = ({ width = 1000, height = 1000, ...props }: ImageProps) => {
  return <NextImage width={width} height={height} {...props} />;
};

export default Image;
