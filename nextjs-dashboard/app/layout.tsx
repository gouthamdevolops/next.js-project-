import './ui/global.css';
import { inter } from './ui/fonts';
import BackButton from '@/app/components/Backbutton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <BackButton />
        {children}
      </body>
    </html>
  );
}