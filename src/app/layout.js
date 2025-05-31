import { Kaisei_Decol } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const inter = Kaisei_Decol({  weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Marissa Morrow | Stories in Light",
  description: "Mindful, documentary-style photography by Marissa Morrow. Capturing emotion, story, and humanity—rooted in community and authenticity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <Header />
      {children}
      <Footer />
      </body>
    </html>
  );
}
