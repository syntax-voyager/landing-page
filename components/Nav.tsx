"use client";

import { navLinks } from "@/util/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`bg-background/95 backdrop-blur-md fixed z-50 shadow-md border-b border-gray-200 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'top-0 left-0 right-0 rounded-none' 
        : 'top-4 sm:top-6 lg:top-10 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 rounded-lg'
    }`}>
      <div className="flex justify-between items-center py-3 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="">
          {/* Brand LOGO */}
          <Image
            src="/images/logo.png"
            alt="Ekaant Logo"
            width={150}
            height={50}
            className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 xl:space-x-12 2xl:space-x-20">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <span className="relative text-sm xl:text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 ease-in-out group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform duration-200 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-opacity duration-200 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform duration-200 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href} onClick={closeMenu}>
                <div className="relative block py-3 px-4 text-base font-semibold text-foreground hover:text-primary rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:bg-primary/5 border border-transparent hover:border-primary/10">
                  {link.name}
                  <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out hover:w-[calc(100%-2rem)]"></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
