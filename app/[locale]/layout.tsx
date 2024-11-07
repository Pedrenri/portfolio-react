import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const metadata: Metadata = {
  title: "Pedro Henri",
  description: "O portfólio de um profissional.",
  icons: {
    icon: "./icon.png",
  },
};

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
    <html lang="pt">
      <head>
        <link rel="icon" href="icon.png" />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
    </NextIntlClientProvider>
  );
}
