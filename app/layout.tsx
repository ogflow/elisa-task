import Layout from "@/src/components/Layout/Layout";
import "@styles/globals.css";
import { Open_Sans } from "next/font/google";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Elisa",
  description: "Elisa task by Sergey Smirnov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
