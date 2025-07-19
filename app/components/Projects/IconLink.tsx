import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { iconLink } from '../types';

const IconLink = (icon: iconLink) => {
  return (
    <Link href={icon.link}>
      <Image src={icon.src} alt={icon.alt} width={40} height={40} />
    </Link>
  );
};

export default IconLink;
