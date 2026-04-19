import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xerikos LLC — Build with AI & Solid Software Engineering",
  description:
    "Xerikos LLC helps companies build world-class products with AI and solid software engineering at the highest quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
