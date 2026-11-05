import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-bricolage",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-instrument",
});

export const metadata = { title: "Trip Amazônia Jungle — Guia da Galera" };

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${instrument.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
