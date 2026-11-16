import type { Metadata } from "next";
import { Raleway, Open_Sans, Nunito_Sans } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const raleway = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

// Só usada nas aspas grandes dos depoimentos
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fylo — Landing page",
  description: "All your files in one secure location, accessible anywhere.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${openSans.variable} ${nunitoSans.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
