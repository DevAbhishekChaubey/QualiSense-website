import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Icons from "@/components/Icons";
import GridBackground from "@/components/GridBackground";
import Spotlight from "@/components/Spotlight";
import CursorFollower from "@/components/CursorFollower";
import GrainBackground from "@/components/GrainBackground";
import { FooterFull } from "@/components/Footer";
import { RefreshProvider } from "@/contexts/RefreshContext";
import { LightModeForcer } from "@/components/LightModeForcer";

export const metadata: Metadata = {
  title: "Qualisense — A Force Multiplier for Researchers",
  description:
    "Qualisense is a force multiplier for researchers and gives every marketer access to reusable research intelligence.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#f8fbfc" />
      </head>
      <body>
        <LightModeForcer />
        <RefreshProvider>
          <Icons />
          <GrainBackground />
          <GridBackground />
          <Spotlight />
          <CursorFollower />
          <Nav />
          {children}
          <FooterFull />
        </RefreshProvider>
      </body>
    </html>
  );
}
