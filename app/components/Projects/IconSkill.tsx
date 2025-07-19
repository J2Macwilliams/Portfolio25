import Image from 'next/image';
import React from 'react';
import { iconSkill } from '../types';

const IconImage = ({ alt, src }: iconSkill) => {
  return <Image src={src} alt={alt} width={40} height={40} />;
};

export default IconImage;
