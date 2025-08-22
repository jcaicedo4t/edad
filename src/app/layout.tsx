import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "¿Cuántos Años Tienes? | Test Divertido de Edad",
  description: "¡Descubre de forma divertida si eres joven, mayor de edad o sabio! Comparte con tus amigos y diviértete con este test viral de edad.",
  keywords: "test de edad, juego viral, mayoría de edad, test divertido, compartir en redes",
  authors: [{ name: "Creador Divertido" }],
  openGraph: {
    title: "¿Cuántos Años Tienes? | Test Divertido de Edad",
    description: "¡Descubre de forma divertida si eres joven, mayor de edad o sabio! Comparte con tus amigos.",
    images: ["/abuelo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Cuántos Años Tienes? | Test Divertido de Edad",
    description: "¡Descubre de forma divertida si eres joven, mayor de edad o sabio! Comparte con tus amigos.",
    images: ["/abuelo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#FFEB3B" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Test de Edad" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
