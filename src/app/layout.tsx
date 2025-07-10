import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhinav Bandaru - Portfolio",
  description: "Full-stack developer and software engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains_mono.className}>{children}</body>
    </html>
  );
}
