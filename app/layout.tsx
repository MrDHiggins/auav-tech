import '@/app/ui/globals.css';
import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts';
import TopNav from '@/app/ui/navigation/topNav';
import { Footer } from '@/app/ui/footer/Footer';

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
    <html>
      <body className={`${inter.className} antialiased`}>
        <TopNav/>
        {children}
        </body>
        <Footer 
            showCopyRight={true}
            socialLinks={{
                twitter: 'https://twitter.com/yourcompany'
            }} 
        />

    </html>
  );
}
