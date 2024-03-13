import '@/app/ui/globals.css';
import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "African UAV Tech",
  description: "African UAV Technologies empowers organizations across Africa to safely, legally,and ethically integrate Unmanned Aerial Systems (UAS) technology into their operations.",
  icons: {
    icon: "../public/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
