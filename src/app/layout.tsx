import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "./providers/ThemeProvider";

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
    <html lang="en">
      <body>
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
