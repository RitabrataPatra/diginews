import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google'

import Header from '@/components/Header';

import "./variables.css"
import "./globals.css";

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})


export const metadata: Metadata = {
  title: "DigiNews - Digitally Yours",
  description: "A digital news aggregator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto_mono.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
