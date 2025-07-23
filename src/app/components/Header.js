// ANCHOR: header-navigation - Restaurant header with navigation
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50"
      style={{ boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img src="/lesmomes.png" alt="Les Momes" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:block">
            <div className="flex items-center space-x-12">
              <a
                href="#menu"
                className="nav-link hover:text-gray-900 text-sm font-light tracking-wide uppercase"
                style={{ color: "#333333" }}
              >
                Menu
              </a>
              <a
                href="#reservations"
                className="nav-link hover:text-gray-900 text-sm font-light tracking-wide uppercase"
                style={{ color: "#333333" }}
              >
                Reservations
              </a>
              <a
                href="#instagram"
                className="nav-link hover:text-gray-900 text-sm font-light tracking-wide uppercase"
                style={{ color: "#333333" }}
              >
                Gallery
              </a>
            </div>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-gray-900"
              style={{ color: "#333333" }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-6 py-4 space-y-4 bg-white border-t border-gray-100">
              <a
                href="#menu"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-light tracking-wide uppercase hover:text-gray-900"
                style={{ color: "#333333" }}
              >
                Menu
              </a>
              <a
                href="#reservations"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-light tracking-wide uppercase hover:text-gray-900"
                style={{ color: "#333333" }}
              >
                Reservations
              </a>
              <a
                href="#instagram"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-light tracking-wide uppercase hover:text-gray-900"
                style={{ color: "#333333" }}
              >
                Gallery
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Michelin Logo */}
      <a
        href="https://guide.michelin.com/ca/fr/quebec/montreal_2433514/restaurant/les-momes"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hover:opacity-75 transition-opacity"
      >
        <img
          src="/michelin-2025.png"
          alt="Michelin Guide"
          className="h-18 w-auto"
        />
      </a>
    </header>
  );
}
