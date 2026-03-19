

'use client';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Poppins } from 'next/font/google';
import 'aos/dist/aos.css';
import './globals.css';

const poppins =Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        <title>AAVORide | Safe & Secure Ride Sharing</title>
        <meta name="description" content="Experience the best ride-sharing service with AAVORide. Fast, secure, and affordable transportation at your fingertips." />
        <meta name="keywords" content="ride sharing, transportation, safe travel, AAVORide, taxi service" />
        <meta name="google-site-verification" content="googledfe7cbda89b603ab"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
      </head>
      <body>{children}</body>
    </html>
  );
}














