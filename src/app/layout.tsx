import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Header from '@/layout/header';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Jayce TechLog',
  description: 'FrontEnd Engineer Jayce :)',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get('theme')?.value ?? 'light';
  return (
    <html lang="en">
      <body data-theme={theme} className={`w-dvw h-dvh bg-[var(--color-background)]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
