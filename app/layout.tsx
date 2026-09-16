import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['cyrillic', 'latin'], weight: ['400', '500'], style: ['normal', 'italic'] });
const sans = Manrope({ variable: '--font-sans', subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tina-girey-reality.anastasiaege2018.chatgpt.site'),
  title: 'Art of Creative Reality — метод создания реальности',
  description: 'ACR — авторский метод и экосистема Тины Гирей: увидеть текущую игру, создать следующую и начать действовать из неё.',
  openGraph: {
    title: 'Art of Creative Reality',
    description: 'Реальность не дана. Она создаётся.',
    images: [{ url: '/tina-girey-og.png', width: 1200, height: 630, alt: 'Тина Гирей — искусство создавать реальность' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
