'use client';
import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const logoRef = useRef<HTMLImageElement | null>(null);
  const animationRef = useRef<any | null>(null);

  const spinLogo = () => {
    var t2 = gsap.to(logoRef.current, {
      rotation: 360,
      duration: 2,
      repeat: 0,
      ease: 'linear',
    });
    return t2;
  };

  useEffect(() => {
    var master = gsap.timeline();
    master.add(spinLogo());
  }, []);

  const handleMouseEnter = () => {
    if (!logoRef.current) return;
    animationRef.current = gsap.to(logoRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear',
    });
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotation: 0,
        duration: 0.5,
        ease: 'power1.out',
      });
    }
  };
  return (
    <div>
      <Link href="/">
        <Image
          ref={logoRef}
          src={resolvedTheme === 'light' ? '/J.png' : '/darkJ.png'}
          alt="Jeremy J McWilliams Logo"
          width={50}
          height={10}
          style={{ cursor: 'pointer' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Link>
    </div>
  );
};

export default Logo;
