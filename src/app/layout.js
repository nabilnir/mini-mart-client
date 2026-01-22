
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../providers/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mini Mart | Premium Shopping",
  description: "Experience the future of shopping with Mini Mart.",
  icons: {
    icon: "/logog.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        <AuthProvider>
          <Navbar />
          <main className="flex-grow pt-24 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
