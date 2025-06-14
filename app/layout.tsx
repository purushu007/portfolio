import "./globals.css";

export const metadata = {
  title: "Purushothama Reddy M",
  description: "I've been developing websites for 5 years straight. Get in touch with me to know more.",
  openGraph: {
    title: "Purushothama Reddy M",
    description: "I've been developing websites for 7 years straight. Get in touch with me to know more.",
    url: "https://www.purushothamareddy.in/",
    siteName: "Purushothama Reddy M",
    images: [
      {
        url: "/images/profile-pic.JPG",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
} 