import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARSharing | Info Mahasiswa UNAIR",
  description: "ARSharing adalah portal informasi untuk mahasiswa Universitas Airlangga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col bg-cream text-text-dark antialiased">
        <LanguageProvider>
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
