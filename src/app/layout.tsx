import type { Metadata } from "next";
import { Be_Vietnam_Pro as Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import cn from "@/utils/cn";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tools for dev",
  description: "make by longnguyen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={cn(inter.className, "pt-20 min-h-dvh")}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
