import React from 'react';
import { Links, Meta } from '@remix-run/react';

const Head: React.FC = () => {
  return (
    <head>
      {/* Remix for easilty injecting meta and reference links in the head 
      from a function called in the Page-Component (e.g. https://remix.run/docs/en/v1/api/conventions#meta) */}
      <Meta />
      <Links />

      {/* Icon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/icons/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </head>
  );
};

export default Head;
