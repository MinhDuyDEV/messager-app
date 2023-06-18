import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger app | MinhDuyDev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
// nHDUO5T9VC7aYCel
// mongodb+srv://minhduydev:<password>@cluster0.vpn5laa.mongodb.net/
// mongodb+srv://minhduydev:nHDUO5T9VC7aYCel@cluster0.vpn5laa.mongodb.net/messenger-app
