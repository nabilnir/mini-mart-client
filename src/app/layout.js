import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";

export const metadata = {
  title: "MiniMart - Best Products",
  description: "Your favorite product catalog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
