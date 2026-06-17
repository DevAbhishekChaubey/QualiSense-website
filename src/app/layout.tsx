import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Icons from "@/components/Icons";
import DeferredEffects from "@/components/DeferredEffects";
import { FooterFull } from "@/components/Footer";
import { RefreshProvider } from "@/contexts/RefreshContext";
import { LightModeForcer } from "@/components/LightModeForcer";

export const metadata: Metadata = {
  title: "Qualisense — A Force Multiplier for Researchers",
  description:
    "Qualisense is a force multiplier for researchers and gives every marketer access to reusable research intelligence.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" data-scroll-behavior="smooth" style={{ colorScheme: 'light' }} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#f8fbfc" />
      </head>
      <body suppressHydrationWarning>
        <LightModeForcer />
        <RefreshProvider>
          <Icons />
          <DeferredEffects />
          <Nav />
          {children}
          <FooterFull />
        </RefreshProvider>
      </body>
    </html>
  );
}
