import { Geist, Geist_Mono, Gravitas_One , Momo_Signature } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const gravitas_One = Gravitas_One({
  weight: "400",
  subsets: ['latin'],
})

const momo_signature = Momo_Signature({
  weight: "400",
  subsets: ['latin'],
})

export const metadata = {
  title: "Steph-M | Développeur Full-Stack React & Node.js",
  description: "Portfolio de Steph M., développeur full-stack spécialisé en React, Next.js, Laravel et Node.js. Découvrez mes projets et mon expertise.",
  keywords: ['Développeur', 'Full-Stack', 'React', 'Next.js', 'Laravel', 'Node.js', 'Portfolio', 'Web', 'JavaScript'],
  authors: [{ name: 'Steph M.', url: 'https://steph-m.dev' }],
  
  // Open Graph
  openGraph: {
    title: "Steph-M | Développeur Full-Stack",
    description: "Portfolio de Steph M., développeur full-stack spécialisé en React, Next.js, Laravel et Node.js.",
    url: "https://steph-m.dev",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://steph-m.dev/og-image.png", // À créer (ou utiliser une image existante)
        width: 1200,
        height: 630,
        alt: "Steph-M Portfolio",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Steph-M | Développeur Full-Stack",
    description: "Portfolio de Steph M., développeur full-stack spécialisé en React, Next.js, Laravel et Node.js.",
    images: ["https://steph-m.dev/og-image.png"], // Même image
    creator: "@steph_dev", // À remplacer par ton vrai handle Twitter
  },
  
  // Canonical URL
  canonical: "https://steph-m.dev",
  
  // Icône du site
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
