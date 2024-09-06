import React from 'react';
import NextImage from 'next/image';
import { ImageProps } from './Image.types';

const Image = (props: ImageProps) => {
  return <NextImage width={1000} height={1000} {...props} />;
};

export default Image;
