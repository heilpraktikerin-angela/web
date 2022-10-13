import type {LinksFunction} from '@remix-run/node';
import {
    LiveReload,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/root.tailwind.css';

// Import generated Tailwind.css into the App
// https://remix.run/docs/en/v1/guides/styling#tailwind-css
export const links: LinksFunction = () => {
    return [{rel: 'stylesheet', href: styles}];
};

export default function App() {
    return (
        <html>
            <Outlet/>
            <ScrollRestoration/>
            <Scripts/>
            <LiveReload/>
        </html>
    );
}
