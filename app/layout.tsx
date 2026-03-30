import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: 'SalaarPedia — The Complete Lore of Khansaar',
    template: '%s | SalaarPedia',
  },
  description:
    'The ultimate fan wiki for Salaar: Part 1 – Ceasefire. Explore the lore of Khansaar, the three clans, the Nibandhana constitution, and all characters.',
  keywords: ['Salaar', 'Khansaar', 'Prabhas', 'Prashanth Neel', 'Nibandhana', 'Mannar', 'Shouryaanga', 'Ghaniyaar'],
  openGraph: {
    title: 'SalaarPedia — The Complete Lore of Khansaar',
    description: 'Explore the world of Khansaar. Three clans. One constitution. One Salaar.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SalaarPedia — The Complete Lore of Khansaar',
    description: 'Explore the world of Khansaar. Three clans. One constitution. One Salaar.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-black text-[#E5E5E5] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#C9A84C]/10 py-8 text-center">
          <p
            className="text-[#888] text-sm"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            SALARPEDIA &mdash; The Complete Lore of Khansaar
          </p>
          <p className="text-[#555] text-xs mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
            A fan wiki for Salaar: Part 1 &ndash; Ceasefire &copy; Prashanth Neel / Hombale Films
          </p>
        </footer>
      </body>
    </html>
  );
}
