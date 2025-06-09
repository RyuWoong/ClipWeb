import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Nanum_Gothic, Permanent_Marker } from 'next/font/google';
import './globals.css';

const nanumGothic = Nanum_Gothic({
  variable: '--font-nanum-gothic',
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

const permanentMarker = Permanent_Marker({
  variable: '--font-permanent-marker',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'CLIP - 당신의 웹 컨텐츠 저장소',
  description: '당신의 웹 컨텐츠를 편하게 저장하고, 어디서나 꺼내 보세요.',
  openGraph: {
    images: '/assets/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${nanumGothic.variable} ${permanentMarker.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
