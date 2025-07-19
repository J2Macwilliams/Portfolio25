'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './hamburger.module.css';

export interface MenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HamburgerButton({ isOpen, setIsOpen }: MenuProps) {
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <button
      id="burger"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      onClick={toggleMenu}
      className={`${styles.burgerButton} ${isOpen ? styles.active : ''}`}
      type="button"
    >
      <span className="hidden">Toggle menu</span>
      <span
        className={`bg-blue-950 dark:bg-blue-50 ${styles.burgerBar} ${styles.bar1}`}
      ></span>
      <span
        className={`bg-blue-950 dark:bg-blue-50 ${styles.burgerBar} ${styles.bar2}`}
      ></span>
      <span
        className={`bg-blue-950  dark:bg-blue-50 ${styles.burgerBar} ${styles.bar3}`}
      ></span>
    </button>
  );
}
