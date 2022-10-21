import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import styles from './styles/root.tailwind.css';

// Adds Link html tag rerferencing a specified ressource
// e.g. Tailwind Styles: <link rel="stylesheet" href="/build/_assets/root.tailwind-XYZ.css">
// The Tag will be added where <Links/> was specified (in this case PageLayout, for clean structure
// -> To apply Tailwind styles the Component needs to be wrapped with the PageLayout!)
// https://remix.run/docs/en/v1/guides/styling#tailwind-css
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function App() {
  // Note: Each Page referenced here (-> all Pages in `/routes`) needs to be wrapped in a PageLayout,
  // to ensure everything works as expected.
  // All necessary Components for LiveReloading, linking Links or Meta are referenced in there.
  // Decided to outsource the PageLayout (Nav, Head, Footer, ..),
  // instead of building it in here for better customization in the Page Components regarding the Layout
  // (e.g. hide Navbar, different Navbar, ..)
  return <Outlet />;
}
