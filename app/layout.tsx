import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EduNova",
  description: "Your gateway to knowledge and success",
};

/**
 * Provides the application's root HTML structure and global layout.
 *
 * @param children - Content rendered inside the document body.
 * @returns The root HTML element containing the body with the global font variable and antialiasing classes.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >

        {children}
      </body>
    </html>

  );
}