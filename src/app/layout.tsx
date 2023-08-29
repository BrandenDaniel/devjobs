import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "../sass/main.scss";

export const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devjobs | job search",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh_sans.className}>{children}</body>
    </html>
  );
}
