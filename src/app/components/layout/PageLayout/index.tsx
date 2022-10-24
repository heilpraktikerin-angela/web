import { LiveReload, Scripts, ScrollRestoration } from '@remix-run/react';
import clsx from 'clsx';
import React from 'react';
import { tss } from '~/core/helper/tss';
import Footer from './components/Footer';
import { default as HeadComponent } from './components/Head';
import Navbar from './components/Navbar';
import {
  InnerContainerXSpacing,
  ContentTopMargin,
  ContentTopPadding,
} from './styles';

const PageLayout: React.FC<TPageLayoutProps> = (props) => {
  const {
    children,
    showNav = true,
    showFooter = true,
    innerContainerXSpacing = true,
    excludeNavbarHeightInContent = true,
  } = props;

  return (
    <html lang="en">
      <HeadComponent />
      <body className={Container}>
        {/* Content */}
        {showNav && <Navbar />}
        <main
          className={clsx(
            innerContainerXSpacing && InnerContainerXSpacing,
            excludeNavbarHeightInContent && ContentTopMargin,
            ContentContainer,
          )}
        >
          {typeof children === 'function'
            ? children({
                ContentTopMargin,
                ContentTopPadding,
                InnerContainerXSpacing,
              })
            : children}
        </main>
        {showFooter && <Footer />}

        {/* Remix Stuff */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default PageLayout;

type TPageLayoutProps = {
  children: React.ReactNode | ((props: ChildrenProps) => React.ReactNode);
  showNav?: boolean;
  showFooter?: boolean;
  innerContainerXSpacing?: boolean;
  excludeNavbarHeightInContent?: boolean;
};

type ChildrenProps = {
  ContentTopMargin: string;
  ContentTopPadding: string;
  InnerContainerXSpacing: string;
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
  w-full
`;
