import type { LinksFunction } from '@remix-run/node';
import {
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
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
  return (
    <html>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </html>
  );
}
