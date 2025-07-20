import Image from 'next/image';
import React from 'react';
import { imageLink } from '../types';

const IconImage = ({ alt, src }: imageLink) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={30}
      height={30}
      className="md:w-10 sm:w-5"
    />
  );
};

export default IconImage;
