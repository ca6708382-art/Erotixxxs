import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Crimson_Pro,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css"; // Global styles

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const crimson = Crimson_Pro({ subsets: ["latin"], variable: "--font-crimson" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "EROTIXXXS - Literatura Premium",
  description: "Premium erotic literature platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} ${playfair.variable} ${crimson.variable} ${jakarta.variable} dark`}
    >
      <body
        className="bg-[#050303] text-white/80 font-sans font-light tracking-wide antialiased selection:bg-[#4A0001] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
