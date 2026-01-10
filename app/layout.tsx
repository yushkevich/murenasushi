import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Murena Seafood Restaurant",
  description: "Murena Seafood Restaurant in Warsaw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
