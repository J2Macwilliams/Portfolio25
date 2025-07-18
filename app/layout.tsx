"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Splash from "./components/splash/Splash";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [isLoading, setIsLoading] = useState(isHome);

	return (
		<html lang='en' suppressHydrationWarning>
      
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{isLoading && isHome ? (
					<Splash finishLoading={() => setIsLoading(false)} />
				) : (
					<>
            <Providers>
							<div className='mb-32'>
							<Navbar />
							</div>
            
						{children}
            </Providers>
					</>
				)}
			</body>
      
		</html>
	);
}
