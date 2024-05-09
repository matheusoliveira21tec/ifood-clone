import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "./_context/cart";
import "./globals.css";
import AuthProvider from "./_providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delivery de Comida e Mercado - iFood",
  description:
    "O jeito mais fácil de pedir delivery de comida e fazer mercado. Leia avaliações de restaurantes, faça seu pedido pela internet e receba em casa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
