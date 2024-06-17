import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import {Header} from "@/app/_sections/Header";
import {Footer} from "@/app/_sections/Footer";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inside Volleyball",
  description: "\"INSVOLLEY\" - Новый спортивный сайт о Казахстанском волейболе",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
