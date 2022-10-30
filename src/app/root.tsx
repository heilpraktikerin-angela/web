import React from 'react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import styles from '~/styles/root.tailwind.css';
import { RootContext } from './core/context';

// MetaFuction, .. not exported from './home' because of Highdration issue
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

// Adds Link html tag rerferencing a specified ressource
// e.g. Tailwind Styles: <link rel="stylesheet" href="/build/_assets/root.tailwind-XYZ.css">
// The Tag will be added where <Links/> was specified (in this case PageLayout, for clean structure
// -> To apply Tailwind styles the Component needs to be wrapped with the PageLayout!)
// https://remix.run/docs/en/v1/guides/styling#tailwind-css
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

// https://remix.run/docs/en/v1/guides/envvars
// https://stackoverflow.com/questions/70730642/window-is-not-defined-when-trying-to-access-environment-variables-in-remix
// Loader run only on the server and are never bundled into your client-side JavaScript
export async function loader() {
  // https://github.com/remix-run/remix/issues/1186
  // https://github.com/remix-run/remix/discussions/2936
  const { contactConfig } = await import('./core/config');

  return json({
    ENV: {
      contactConfig,
    },
  });
}

const App: React.FC = () => {
  const { ENV } = useLoaderData();

  React.useEffect(() => {
    window.ENV = ENV;
  }, [ENV]);

  // Note: Each Page referenced here (-> all Pages in `/routes`) needs to be wrapped in a PageLayout,
  // to ensure everything works as expected.
  // All necessary Components for LiveReloading, linking Links or Meta are referenced in there.
  // Decided to outsource the PageLayout (Nav, Head, Footer, ..),
  // instead of building it in here for better customization in the Page Components regarding the Layout
  // (e.g. hide Navbar, different Navbar, ..)
  return (
    <RootContext.Provider value={ENV}>
      <Outlet context={ENV} />
    </RootContext.Provider>
  );
};

export default App;
