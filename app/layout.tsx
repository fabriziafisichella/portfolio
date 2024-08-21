import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Context from "./(context)/globalcontext";
import { NavBar } from "./components/NavBar/NavBar";
import { Background } from "./components/Background/Background";
import { Footer } from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabrizia Fisichella • Portfolio",
  description: "Fabrizia Fisichella's professional porftolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Context>
        <body className={inter.className}>
          <NavBar />
          {children}
          <Background />
          <Footer />
        </body>
      </Context>
    </html>
  );
}
