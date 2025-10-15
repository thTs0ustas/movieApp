import Head from 'next/head';
import type { PropsWithChildren } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { useRouter } from 'next/router';

import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface LayoutProps {
  backButton?: boolean;
}

export const Layout = ({
  children,
  backButton,
}: PropsWithChildren<LayoutProps>) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta
          name="description"
          content="A simple movie app built with Next.js and TypeScript"
        />
      </Head>
      <div
        className={`${geistSans.className} ${geistMono.className} flex min-h-screen flex-col items-center justify-center gap-16 px-6 py-8 font-sans sm:px-20 md:px-20`}>
        <Header />
        {backButton && (
          <div>
            <button
              onClick={() => router.push('/')}
              className="cursor-pointer text-blue-500 transition-colors duration-300 hover:text-blue-700">
              Back to Home
            </button>
          </div>
        )}
        <main className="row-start-2 flex grow flex-col items-center gap-[32px]">
          {children}
        </main>
        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} Movie App
          </span>
        </footer>
        <Toaster richColors expand />
      </div>
    </>
  );
};
