import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Icons from "@/components/Icons";
import GridBackground from "@/components/GridBackground";
import Spotlight from "@/components/Spotlight";
import CursorFollower from "@/components/CursorFollower";
import GrainBackground from "@/components/GrainBackground";
import { FooterFull } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Qualisense — A Force Multiplier for Researchers",
  description:
    "Qualisense is a force multiplier for researchers and gives every marketer access to reusable research intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Icons />
        <GrainBackground />
        <GridBackground />
        <Spotlight />
        <CursorFollower />
        <Nav />
        {children}
        <FooterFull />
      </body>
    </html>
  );
}
