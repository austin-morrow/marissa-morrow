import { Kaisei_Decol } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const inter = Kaisei_Decol({  weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Marissa Morrow",
  description: "Denver based photographer",
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
