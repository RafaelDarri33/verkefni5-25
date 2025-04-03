import "@/styles/globals.scss";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vefforritun 2 - Verkefni 5",
  description: "Next.js + DatoCMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is">
      <body>
        <nav style={{ padding: "1rem", background: "#e0e0e0" }}>
          <Link href="/" style={{ marginRight: "1rem" }}>Forsíða</Link>
          <Link href="/frettir">Fréttir</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

