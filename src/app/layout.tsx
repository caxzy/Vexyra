import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'VexyraHub - Your Hub for optimization.',
  description: 'VexyraHub - No limits to your goals—optimize your Windows using proven and verified optimization tools for higher FPS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#060606] text-white antialiased min-h-screen relative font-sans">
        <Navbar />
        <main className="pt-28 pb-10 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}