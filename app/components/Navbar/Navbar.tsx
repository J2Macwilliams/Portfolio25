'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import HamburgerButton, { MenuProps } from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getLightnessFromHex = (hex: any) => {
    hex = hex.replace(/^#/, '');

    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const brightness = (0.2126 * r + 0.75152 * g + 0.722 * b) / 255;
    return +(brightness * 100).toFixed(2);
  };

  const setColor = (input: any) => {
    const lightness = getLightnessFromHex(input)
    document.documentElement.style.setProperty('--background', input)
    document.documentElement.style.setProperty('--primary', lightness > 120 ? '#010145': lightness > 80 ? '#2f2f2f ': '#adbcc0')

  };


  return (
    <div className="mb-12 bg-foreground">
      <div className="flex justify-between p-2">
        <Logo />
        <div className="hidden md:flex justify-evenly items-center w-1/3">
          <Link href="/about">
            About{' '}
          </Link>
          <Link href="/projects">
            Projects{' '}
          </Link>
          <div className="flex justify-center items-center">
            Theme
            <input
              type="color"
              id="colorInput"
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="md:hidden flex justify-evenly items-center w-1/6 text-3xl">
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed flex justify-end w-full ">
          <div className="flex flex-col w-1/4 p-4 shadow-md z-10 dark:shadow-blue-400 rounded-md">
            <Link className="px-2 text-lg" href="/about">
              About{' '}
            </Link>
            <Link className="px-2 text-lg" href="/projects">
              Projects{' '}
            </Link>
            {/* <Link className='px-2 text-lg' href="experience">Experience </Link> */}
            <div className="flex justify-center items-center">
              Theme
              <input
                type="color"
                id="colorInput"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

