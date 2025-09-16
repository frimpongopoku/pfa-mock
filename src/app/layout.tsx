import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PFA Mock - Modern Next.js Setup",
  description: "A modern Next.js setup with TypeScript, Tailwind CSS, Framer Motion, Shadcn/ui, and Lucide Icons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
