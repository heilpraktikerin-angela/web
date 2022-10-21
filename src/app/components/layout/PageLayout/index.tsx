import { LiveReload, Scripts, ScrollRestoration } from '@remix-run/react';
import clsx from 'clsx';
import React from 'react';
import { tss } from '~/core/helper/tss';
import Footer from './components/Footer';
import { default as HeadComponent } from './components/Head';
import Navbar from './components/Navbar';
import { InnerContainerXSpacing } from './styles';

const PageLayout: React.FC<TPageLayoutProps> = (props) => {
  const { children, showNav = true, showFooter = true } = props;

  return (
    <html lang="en">
      <HeadComponent />
      <body className={Container}>
        {/* Remix Stuff */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        {/* Content */}
        {showNav && <Navbar />}
        <main className={clsx(InnerContainerXSpacing, ContentContainer)}>
          {children}
        </main>
        {showFooter && <Footer />}
      </body>
    </html>
  );
};

export default PageLayout;

type TPageLayoutProps = {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
};

const Container = tss`
  flex
  flex-col
  w-full
  min-h-screen
  overflow-x-hidden
  bg-white
  text-black
  font-sf-pro-text
`;

const ContentContainer = tss`
  mt-16
  pt-2
  phone:pt-4
  desktop:pt-8
`;
