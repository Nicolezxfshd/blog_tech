import type { Metadata } from "next";
import { Inter, Roboto_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./Componentes/Navigation";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BlogTech - Artigos Populares",
  description: "Os melhores artigos sobre tecnologia, programação e desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased bg-gray-50`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
