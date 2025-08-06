import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Mona_Sans } from "next/font/google";

const press_start = Mona_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "João | Portifolio",
    template: "%s | Portifolio",
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
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <Container>
            <NavBar />
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
