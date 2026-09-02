import type { Metadata } from "next";
import { Baloo_2, Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Children's Park | Kurnool's Premier Amusement Park",
  description:
    "Children's Park, Kurnool — ride the Giant Wheel, chug along on the Panda Train, and enjoy thrilling attractions, live entertainment, and delicious food stalls. Andhra Pradesh's most magical family destination.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${nunito.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-body text-slate-800">
        {children}
      </body>
    </html>
  );
}
