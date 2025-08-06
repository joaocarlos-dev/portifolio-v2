// app/layout.tsx (ou app/layout.jsx dependendo do seu projeto)

import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Mona_Sans } from "next/font/google";
import MatrixRainingCode from "@/components/matrixRainingEffect";

const press_start = Mona_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "João | Portifólio",
    template: "%s | Portifólio",
  },
  description: "Meu portifólio pessoal",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={press_start.className}>
      <body className="overflow-x-hidden relative">
        <ThemeProvider>
          <div className="fixed inset-0 z-0 pointer-events-none">
            <MatrixRainingCode />
          </div>

          <Container>
            <NavBar />
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
