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
import { useRootContext } from '~/core/context';

const PageLayout: React.FC<TPageLayoutProps> = (props) => {
  const {
    children,
    showNav = true,
    showFooter = true,
    innerContainerXSpacing = true,
    excludeNavbarHeightInContent = true,
    mdx = false,
    className,
  } = props;
  const { googleConfig, contactConfig } = useRootContext();

  // Everything located in the browser is exposed to the end user anyway
  console.log({ googleConfig, contactConfig });

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
            mdx && MdxWrapper,
            ContentContainer,
            className
          )}
        >
          {typeof children === 'function'
            ? children({
                ContentTopMargin,
                ContentTopPadding,
                InnerContainerXSpacing,
                MdxWrapper,
              })
            : children}
        </main>
        {showFooter && <Footer />}

        {/* Google Analytics */}
        {/* https://analytics.google.com/analytics/web/?authuser=3#/a247656620p339929547/admin/streams/table/4247260073 */}
        {process.env.NODE_ENV === 'development' ||
        !googleConfig.gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleConfig.gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${googleConfig.gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}

        {/* Remix Stuff */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {/* Workaround for https://github.com/tailwindlabs/headlessui/discussions/666 */}
        <div id="headlessui-portal-root">
          {/* It needs at least one child, so that HeadlessUI doesn't remove this portal root workaround
        ( https://github.com/tailwindlabs/headlessui/blob/main/packages/@headlessui-react/src/components/portal/portal.tsx#L84 ) */}
          <div />
        </div>
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
  className?: string;
  mdx?: boolean;
};

type ChildrenProps = {
  ContentTopMargin: string;
  ContentTopPadding: string;
  InnerContainerXSpacing: string;
  MdxWrapper: string;
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

const MdxWrapper = tss`
  prose
  tablet:prose-xl
  py-10
  prose-h1:font-playfair-display
  prose-h2:font-playfair-display
  prose-h3:font-sf-pro-text
  prose-h4:font-playfair-display
  prose-p:font-sf-pro
`;
