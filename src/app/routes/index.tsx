import type { LinksFunction, MetaFunction } from '@remix-run/node';
import Home from './home/home.ignore';
import styles from './home/home.css';

// MetaFuction, .. not exported from './home' because of Highdration issue
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Praxis für Naturheilkunde | Angela Kohrs',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export * from './home/home.ignore';
export default Home;
