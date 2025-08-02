'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { startTransition, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Splash from './components/splash/Splash';
import './globals.css';
import Providers from './providers';
import { unstable_ViewTransition as ViewTransition } from 'react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  const handleTransition = () => {
    startTransition(() => {
      setIsLoading(false);
    })
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ViewTransition name="splash-transition">
        {isLoading && isHome ? (
          <Splash finishLoading={() => handleTransition()} />
        ) : (
          <Providers>
            <Navbar />
            {children}
          </Providers>
        )}
        </ViewTransition>
      </body>
    </html>
  );
}
