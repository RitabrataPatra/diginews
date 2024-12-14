import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";
import { EB_Garamond} from "next/font/google";
import "./variables.css"
import "./globals.css";

const eb_garamond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});


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
      <body className={`${eb_garamond.variable}`}>
        {children}
      </body>
    </html>
  );
}
