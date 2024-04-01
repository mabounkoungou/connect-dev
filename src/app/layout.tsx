
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Header } from "./header";
//import { Header } from "./header";
//import NextTopLoader from "nextjs-toploader";
//import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "connect-dev",
  description:
    "An application to help pair programming with developers online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header/>
          {/*<Toaster />
          <NextTopLoader />
  <Header /> */}{children}
        </Providers>
      </body>
    </html>
  );
}
