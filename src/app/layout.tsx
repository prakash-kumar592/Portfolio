import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prakash Kumar | Full-stack Developer",
  description:
    "Selected projects by Prakash Kumar: full-stack products, real-time applications, and reliable APIs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
