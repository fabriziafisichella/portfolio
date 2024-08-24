import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Context from "./(context)/globalcontext";
import { NavBar } from "./components/NavBar/NavBar";
import { Background } from "./components/Background/Background";
import { Footer } from "./components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabrizia Fisichella • Portfolio",
  description: "Fabrizia Fisichella's professional portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Context>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <NavBar />
            {children}
            <Background />
            <Footer />
          </NextIntlClientProvider>
        </body>
      </Context>
    </html>
  );
}
