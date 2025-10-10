import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import { Layout } from "@/components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

// === Fuentes ===
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

// === Metadata global ===
export const metadata: Metadata = {
  title: "Farmacia de Turno en Las Flores | Farmacias abiertas hoy",
  description:
    "Consultá qué farmacia está de turno hoy en Las Flores, Buenos Aires. Información actualizada todos los días, horarios, direcciones y contactos.",
  keywords: [
    "farmacia de turno",
    "farmacias Las Flores",
    "farmacia abierta hoy",
    "farmacia de guardia Las Flores",
  ],
  authors: [{ name: "Farmacia de Turno Las Flores" }],
  openGraph: {
    title: "Farmacia de Turno en Las Flores",
    description:
      "Información diaria de farmacias de turno en Las Flores, Buenos Aires.",
    url: "https://www.farmaciadeturnoenlasflores.com.ar",
    siteName: "Farmacia de Turno Las Flores",
    images: [
      {
        url: "https://www.farmaciadeturnoenlasflores.com.ar/image/patron_verde.webp",
        width: 1200,
        height: 630,
        alt: "Farmacias de Turno en Las Flores",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.farmaciadeturnoenlasflores.com.ar/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// === Layout principal ===
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        {/* ✅ Solo poné aquí elementos estáticos como favicon o scripts globales */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} bg-white antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
