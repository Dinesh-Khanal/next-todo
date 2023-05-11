import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next 13.4 sample application todo",
  description:
    "This is simple todo application created in next js 13.4 to show recent change including server action",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1 className="bg-neutral-200 p-2 text-center text-slate-600 text-3xl font-bold">
          Next 13.4 Todo Application
        </h1>
        {children}
      </body>
    </html>
  );
}
