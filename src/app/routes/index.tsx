import type { LinksFunction, MetaFunction } from '@remix-run/node';
import Home from './home/home.ignore';
import styles from './home/home.css';

// MetaFuction, .. not exported from './home' because of Highdration issue
export const meta: MetaFunction = () => ({
  title: 'Praxis für Naturheilkunde | Angela Kohrs',
});

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export * from './home/home.ignore';
export default Home;
