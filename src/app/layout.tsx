import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ThemeRegistry from "@/components/ThemeRegistry";
import '@fontsource/inter';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Casa da Paz",
  description: "Site institucional da Casa da Paz",
  icons: "/logo-casa-da-paz.png", // Definindo o ícone
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{String(metadata.title) ?? ""}</title>
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body
        suppressHydrationWarning={true}
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
        <ThemeRegistry>
          <Navigation />
          <div style={{ flex: 1 }}>
            {children}
          </div>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
