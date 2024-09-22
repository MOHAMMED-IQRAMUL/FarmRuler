import "./globals.css";

export const metadata = {
  title: "FarmRuler",
  description: "FarmRuler - Own your farm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
