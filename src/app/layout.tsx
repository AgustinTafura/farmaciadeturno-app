import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import { Layout } from "@/components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Head from "next/head";

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

export const metadata: Metadata = {
  title: "Farmacias de Turno en Las Flores",
  description: "Calendario actualizado de farmacias de turno en Las Flores",
  openGraph: {
  title: "Farmacias de Turno en Las Flores",
  description: "Calendario actualizado de farmacias de turno en Las Flores",
    url: "https://www.farmaciadeturnoenlasflores.com.ar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Farmacia de Turno en Las Flores – Horarios y Ubicación</title>
        <meta
          name="description"
          content="Consultá qué farmacia está de turno hoy en Las Flores. Información actualizada, horarios, dirección y contacto."
        />
        <meta property="og:title" content="Farmacia de Turno en Las Flores" />
        <meta
          property="og:description"
          content="Horarios y ubicación de la farmacia de turno hoy en Las Flores."
        />
        <meta property="og:image" content="/ruta/a/imagen.jpg" />
        <meta
          property="og:url"
          content="https://www.farmaciadeturnoenlasflores.com.ar/"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.farmaciadeturnoenlasflores.com.ar/"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} bg-white antialiased`}
      >
        <Layout>
          {children}
          {/* <FixedPlugin /> */}
        </Layout>
      </body>
    </html>
  );
}
