import type { LinksFunction } from '@remix-run/node';
import {
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/root.tailwind.css';

// Adds Link html tag rerferencing a specified ressource (located where <Links/> was specified)
// e.g. Tailwind Styles: <link rel="stylesheet" href="/build/_assets/root.tailwind-XYZ.css">
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
