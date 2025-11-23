import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "オンライン収入ガイド - 無料で始める副業・在宅ワーク情報サイト",
  description: "無料または低資金から始められるオンラインでのお金儲けに関する情報を集約。副業、フリーランス、投資、コンテンツ販売など、新たな収入源を見つけるための完全ガイド。",
  keywords: "副業, 在宅ワーク, オンライン収入, フリーランス, 無料, 低資金, 起業, マインドセット",
  openGraph: {
    title: "オンライン収入ガイド - 無料で始める副業・在宅ワーク情報サイト",
    description: "無料または低資金から始められるオンラインでのお金儲けに関する情報を集約",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
