import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashraytechnologies.com"),
  title: "ASHRAY TECHNOLOGIES | Enterprise Salesforce Architecture",
  description: "Powering high-stakes Salesforce ecosystems with custom high-throughput engines and high-fidelity 2GP managed packages.",
  openGraph: {
    title: "ASHRAY TECHNOLOGIES | Enterprise Salesforce Architecture",
    description: "Powering high-stakes Salesforce ecosystems with custom high-throughput engines and high-fidelity 2GP managed packages.",
    url: "https://ashraytechnologies.com",
    siteName: "Ashray Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ASHRAY TECHNOLOGIES | Enterprise Salesforce Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASHRAY TECHNOLOGIES | Enterprise Salesforce Architecture",
    description: "Powering high-stakes Salesforce ecosystems with custom high-throughput engines and high-fidelity 2GP managed packages.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Geist:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}