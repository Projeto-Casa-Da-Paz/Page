// src/app/layout.tsx
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ThemeRegistry from "@/components/ThemeRegistry";
import '@fontsource/inter';

export const metadata: Metadata = {
  title: "Casa da Paz",
  description: "Site institucional da Casa da Paz",
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
        {/* Garantindo que title e description sejam strings válidas */}
        <title>{String(metadata.title) ?? ""}</title>
        <meta name="description" content={metadata.description ?? ""} />
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeRegistry>
          <Navigation />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
