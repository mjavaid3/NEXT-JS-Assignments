// components/Navbar.tsx
'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const href = event.target.getAttribute('href');
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('nav a').forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#333', color: 'white', padding: '10px 0' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none' }}>
        {['About', 'Skills', 'Education', 'Experience', 'Contact'].map((section) => (
          <li key={section}>
            <Link href={`#${section.toLowerCase()}`} scroll={false} style={{ color: 'white', textDecoration: 'none' }}>
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
