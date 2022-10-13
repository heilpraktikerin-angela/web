import React from 'react';
import { tss } from '~/core/helper/tss';
import Footer from './components/Footer';
import { default as HeadComponent } from './components/Head';
import Navbar from './components/Navbar';

const PageLayout: React.FC<TPageLayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <HeadComponent />
      <body className={Container}>
        <Navbar />
        <main className={InnerContainer}>{children}</main>
        <Footer />
      </body>
    </>
  );
};

export default PageLayout;

type TPageLayoutProps = {
  children: React.ReactNode;
};

const Container = tss`
    min-h-screen
    flex
    flex-col
    w-full
    overflow-x-hidden
    bg-white
    text-black
`;

const InnerContainer = tss`
    flex
    flex-col
    flex-1
    h-full
    px-4
    mobile:px-32
`;
