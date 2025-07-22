import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Cabana do Banguela",
  description: "Reserve sua festa temática de Como Treinar o Seu Dragão!",
  // A geração de ícones foi desabilitada para garantir que a tag <link> explícita no <head> funcione sem conflitos.
  icons: false
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="!scroll-smooth">
      <head>
        <link rel="icon" href="https://www.pngall.com/wp-content/uploads/8/How-To-Train-Your-Dragon-Toothless.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="https://www.pngall.com/wp-content/uploads/8/How-To-Train-Your-Dragon-Toothless.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
