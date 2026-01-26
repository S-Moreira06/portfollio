import { Geist, Geist_Mono, Gravitas_One , Momo_Signature } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
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
  title: "MOREIRA S. - Web Dev / Community Manager",
  description: "Portfollio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
