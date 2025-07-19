'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import ThemeSwitch from '../ThemeSwitch';
import Logo from '../Logo';
import Image from 'next/image';
import HamburgerButton, { MenuProps } from '../Hamburger/Hamburger';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between p-2 w-full">
        <Logo />
        <div className="hidden md:flex justify-evenly items-center">
          <Link className="px-2 text-lg" href="about">
            About{' '}
          </Link>
          <Link className="px-2 text-lg" href="projects">
            Projects{' '}
          </Link>
          <Link className="px-2 text-lg" href="experience">
            Experience{' '}
          </Link>
          <div className="text-2xl">
            <ThemeSwitch />
          </div>
        </div>
        <div className="md:hidden flex justify-evenly items-center w-1/6 text-3xl">
          <ThemeSwitch />
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed flex justify-end w-full ">
          <div className="flex flex-col w-1/4 p-4 shadow-lg rounded-md">
            <Link className="px-2 text-lg" href="about">
              About{' '}
            </Link>
            <Link className="px-2 text-lg" href="projects">
              Projects{' '}
            </Link>
            {/* <Link className='px-2 text-lg' href="experience">Experience </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
