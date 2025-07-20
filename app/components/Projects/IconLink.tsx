import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { iconLink } from '../types';

const IconLink = (icon: iconLink) => {
  const hasLink = icon.link !== ''
  if(hasLink) return (
    <a target="_blank" href={icon.link}>
      <Image src={icon.src} alt={icon.alt} width={40} height={40} />
    </a>
  );
  else return (<></>)
};

export default IconLink;
