import React from 'react';
import { tss } from '~/core/helper/tss';
import Footer from './components/Footer';
import Head from './components/Head';
import Navbar from './components/Navbar';

const PageLayout: React.FC<TPageLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className={Container}>
      <Head />
      <Navbar />
      <div className={InnerContainer}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;

type TPageLayoutProps = {
  children: React.ReactNode;
};

const Container = tss`
 relative
 flex
 flex-col
 w-full
 bg-purple
`;

const InnerContainer = tss`
 relative
 flex
 flex-col
`;
