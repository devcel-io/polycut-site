import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PolyCut - Draw. Label. Export.",
  description:
    "PolyCut helps you annotate images on iPad with Apple Pencil and export COCO or Roboflow-ready datasets for training pipelines.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PolyCut - Draw. Label. Export.",
    description:
      "Annotate images on iPad with Apple Pencil, assisted segmentation, offline tools, and COCO or Roboflow export.",
    url: "/",
    siteName: "PolyCut",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PolyCut - Draw. Label. Export.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PolyCut - Draw. Label. Export.",
    description:
      "iPad-first image annotation with Apple Pencil, SAM2, GrabCut, offline tools, and COCO or Roboflow export.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
