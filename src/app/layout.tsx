import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { AppThemeProvider } from "./providers/theme-provider";
export const metadata: Metadata = {
  title: "CeleryCoins | Frimpong - Demo Artefact",
  description:
    "Demo personal finance application built with Next.js, Tailwind CSS, and TypeScript.",
};

const productSans = localFont({
  src: [
    {
      path: "../font/ProductSans-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../font/ProductSans-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../font/ProductSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/ProductSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../font/ProductSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/ProductSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/ProductSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/ProductSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../font/ProductSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/ProductSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../font/ProductSans-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../font/ProductSans-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--product-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${productSans.variable}  antialiased`}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
