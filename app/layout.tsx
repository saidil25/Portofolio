import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Pagetransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrains_mono'
});

export const metadata: Metadata = {
  title: "Personal Portofolio Website",
  description: "Portofolio Website",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains_mono.variable}>
        <Header/>
        <StairTransition/>
        <Pagetransition>{children}</Pagetransition>
     
      </body>
    </html>
  );
}
