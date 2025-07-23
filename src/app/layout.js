import { Poppins, EB_Garamond } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Les Mômes",
  description: "Experience authentic French cuisine in the heart of Montreal. Les Momes offers a carefully crafted menu with the warmth of French hospitality.",
  icons: {
    apple: "/sm-logo.jpeg",
  },
  openGraph: {
    url: "https://lesmomes.vercel.app/",
    type: "website",
    title: "Les Mômes",
    description: "Experience authentic French cuisine in the heart of Montreal. Les Momes offers a carefully crafted menu with the warmth of French hospitality.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/2be14ad5-dfb0-4ab8-8035-e4a265e73004.png?token=uKWFh42i8CS6ogAuHtFoByOm5YTaL86Df0AOjD_YYWM&height=500&width=500&expires=33289240730",
        width: 500,
        height: 500,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "lesmomes.vercel.app",
    url: "https://lesmomes.vercel.app/",
    title: "Les Mômes",
    description: "Experience authentic French cuisine in the heart of Montreal. Les Momes offers a carefully crafted menu with the warmth of French hospitality.",
    images: ["https://opengraph.b-cdn.net/production/images/2be14ad5-dfb0-4ab8-8035-e4a265e73004.png?token=uKWFh42i8CS6ogAuHtFoByOm5YTaL86Df0AOjD_YYWM&height=500&width=500&expires=33289240730"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-CA" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
