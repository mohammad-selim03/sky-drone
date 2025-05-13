'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; 
import { ThemeToggle } from '../ThemeToggle';

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 100) {
        setShow(false); // hide on scroll down
      } else {
        setShow(true); // show on scroll up
      }
      setLastScrollY(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: show ? 0 : -80 }}
      transition={{ duration: 0.25 }}
      className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-primary">SkyStore 🚁</Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#products" className="hover:text-primary transition">Products</Link>
          <Link href="#about" className="hover:text-primary transition">About</Link>
          <Link href="#contact" className="hover:text-primary transition">Contact</Link>
        </nav>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
