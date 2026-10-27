import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chasehorse.com"),
  title: "ChaseHorse — Growth Enabling Logiworkx Partner | Field Operations Platform",
  description:
    "Every field task, verified where it happens. Connect businesses with nearby field workers with GPS check-in, photo evidence, and operational review trails.",
  keywords: [
    "field operations",
    "logistics India",
    "task verification",
    "shelf audit",
    "store audit",
    "field workforce",
    "Logiworkx",
    "ChaseHorse",
  ],
  openGraph: {
    title: "ChaseHorse — Field Operations Platform · India",
    description: "Every field task, verified where it happens.",
    url: "https://chasehorse.com",
    siteName: "ChaseHorse Logiworkx",
    images: [
      {
        url: "/images/chasehorse-brand-logo.png",
        width: 1024,
        height: 342,
        alt: "ChaseHorse — Growth Enabling Logiworkx Partner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/chasehorse-brand-logo.png",
    apple: "/images/chasehorse-brand-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F2EC] text-[#111111] font-sans selection:bg-[#F45116]/20 selection:text-[#111111]">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#111111",
              color: "#FFFFFF",
              border: "1px solid #333333",
              fontFamily: "var(--font-inter)",
            },
          }}
        />
      </body>
    </html>
  );
}
