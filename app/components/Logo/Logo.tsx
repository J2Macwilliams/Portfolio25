'use client';
import React, { useEffect, useRef } from 'react';
import style from './logo.module.css';
import gsap from 'gsap';
import Link from 'next/link';
import { spinLogo } from '@/utils/animations';

const Logo = () => {
  const logoRef = useRef(null);
  const animationRef = useRef<any | null>(null);

  useEffect(() => {
    var master = gsap.timeline();
    master.add(spinLogo(logoRef));
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
    <Link href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="47"
        fill="none"
        id={style.logoSmall}
        ref={logoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <path d="M26.74 25.888a.833.833 0 0 1 .373.57c.07.234.04.474-.089.683l-7.998 12.99c-.84 1.365-1.919 2.378-3.237 3.017-1.315.638-2.753.867-4.3.695h-.003c-1.519-.18-3.015-.754-4.484-1.707-1.505-.975-2.672-2.126-3.483-3.458-.81-1.333-1.215-2.745-1.198-4.228v-.005c.03-1.498.472-2.932 1.31-4.294l1.022-1.659a.835.835 0 0 1 .532-.392l.087-.016a.882.882 0 0 1 .605.134l3.967 2.572a.835.835 0 0 1 .375.57.83.83 0 0 1-.09.683l-1.003 1.63c-.426.693-.548 1.345-.417 1.982l.065.225c.18.52.564.993 1.21 1.412.69.448 1.35.591 2 .476.654-.131 1.188-.513 1.61-1.198l7.981-12.962a.836.836 0 0 1 .533-.392.894.894 0 0 1 .692.119l3.94 2.553Z" />
        <path d="M23.998 20.711a.832.832 0 0 1-.383-.568.827.827 0 0 1 .081-.68l7.832-13.095c.822-1.376 1.889-2.404 3.2-3.063 1.306-.656 2.742-.905 4.292-.756h.003c1.522.157 3.026.71 4.508 1.64 1.519.953 2.702 2.086 3.531 3.406.829 1.32 1.252 2.727 1.255 4.209v.003c-.01 1.498-.434 2.937-1.255 4.311l-1 1.672-.096.134a.808.808 0 0 1-.432.266l-.086.017a.884.884 0 0 1-.608-.126l-4.003-2.512a.832.832 0 0 1-.382-.564.828.828 0 0 1 .08-.684l.983-1.643c.42-.702.531-1.36.389-1.997-.15-.604-.555-1.144-1.295-1.609-.7-.439-1.365-.572-2.015-.445-.65.143-1.177.532-1.589 1.22l-7.814 13.067a.836.836 0 0 1-.527.4.896.896 0 0 1-.695-.108l-3.974-2.495Z" />
      </svg>
    </Link>
  );
};

export default Logo;
