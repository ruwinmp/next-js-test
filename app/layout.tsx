import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Next JS Test",
  description: "Testing Next.js 16 with App Router and Tailwind CSS",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <h1 className="row text-2xl font-bold">Header</h1>
        
        <div className="row mt-10 mb-10">
          {children}
        </div>
      
        <h1 className="row text-xl font-bold">Footer</h1>
      </body>
    </html>
  );
}
