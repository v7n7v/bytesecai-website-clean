
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteSecAI - AI-Powered Cybersecurity Solutions",
  description: "Next-generation cybersecurity solutions powered by artificial intelligence. Protect your organization with cutting-edge AI-driven security, threat detection, and comprehensive cyber defense.",
  keywords: [
    "cybersecurity",
    "AI security",
    "threat detection",
    "cyber defense",
    "artificial intelligence",
    "security solutions",
    "cyber protection",
    "digital security",
    "network security",
    "data protection"
  ],
  authors: [{ name: "ByteSecAI Team" }],
  creator: "ByteSecAI",
  publisher: "ByteSecAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bytesecai.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bytesecai.ai',
    title: 'ByteSecAI - AI-Powered Cybersecurity Solutions',
    description: 'Next-generation cybersecurity solutions powered by artificial intelligence. Protect your organization with cutting-edge AI-driven security.',
    siteName: 'ByteSecAI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ByteSecAI - AI-Powered Cybersecurity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ByteSecAI - AI-Powered Cybersecurity Solutions',
    description: 'Next-generation cybersecurity solutions powered by artificial intelligence.',
    images: ['/og-image.jpg'],
    creator: '@bytesecai',
    site: '@bytesecai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'cybersecurity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Force Dark Mode - Always dark theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Always force dark mode
                  document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ByteSecAI",
              "url": "https://bytesecai.ai",
              "logo": "https://bytesecai.ai/logo.png",
              "description": "AI-Powered Cybersecurity Solutions",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@bytesecai.ai"
              },
              "sameAs": [
                "https://twitter.com/bytesecai",
                "https://linkedin.com/company/bytesecai"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased bg-slate-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
