import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FarmRuler",
  description: "FarmRuler - Own your farm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class"> {/* Use ThemeProvider here */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
