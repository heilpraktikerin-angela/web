import type { MetaFunction } from '@remix-run/node';
import Home from './home/home.ignore';

// MetaFuction, .. not exported from './home' because of Highdration issue

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Home',
  viewport: 'width=device-width,initial-scale=1',
});

export default Home;
