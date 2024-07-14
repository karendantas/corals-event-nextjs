import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ArticleContextProvider } from "@/contexts/articlesContext";
import { UserContextProvider } from "@/contexts/userContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Evento de branqueamento de corais",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <UserContextProvider>
      <ArticleContextProvider>
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" />
      </body>
    </ArticleContextProvider>
    </UserContextProvider>
    </html>
  );
}
