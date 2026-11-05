import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataPulse AI | Weather Intelligence",
  description:
    "Monitor weather observations, analyze trends, and detect anomalies with DataPulse AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}