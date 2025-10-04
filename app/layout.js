import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider
import { AuthProvider } from "./context/AuthContext";
import {Toaster} from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FarmRuler",
  description: "FarmRuler - Own your farm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Toaster/>
        <ThemeProvider attribute="class"> {/* Use ThemeProvider here */}
          {children}
        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
