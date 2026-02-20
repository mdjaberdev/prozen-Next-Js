import { Oswald, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Prozen",
  description: "Your description for Prozen goes here", // Updated placeholder
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 1. poppins.variable: Sets the CSS variable 
        2. font-poppins: Applies the Tailwind font utility
        3. antialiased: Makes fonts look smoother
      */}
      <body className={`${poppins.variable} ${oswald.variable} antialiased`}>
        <Header />
        {/* It is good practice to wrap main content in a main tag */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
