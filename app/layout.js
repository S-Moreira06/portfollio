import { Geist, Geist_Mono, Gravitas_One , Momo_Signature } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} $antialiased`}
      >
        <nav className="flex justify-between bg-gradient-to-br from-violet-600 to-amber-500 p-2"> 
        <div className={gravitas_One.className}><span className={momo_signature.className}>Portfolio de </span>MOREIRA Stéphane</div>
        <div>
            <ul className="flex justify-between">
              <li className="px-2">Acceuil</li>
              <li className="px-2">Contact</li>
            </ul>
        </div>
      </nav>
        {children}
      </body>
    </html>
  );
}
