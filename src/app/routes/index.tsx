import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import Home from './home/home.ignore';
import styles from './home/home.css';

export async function loader() {
  const { contactConfig } = await import('../core/config');
  return json({
    contactConfig,
  });
}

// MetaFuction, .. not exported from './home' because of Highdration issue
export const meta: MetaFunction = (loader) => {
  const contactConfig = loader.data.contactConfig;

  return {
    title:
      'Praxis für Naturheilkunde Homöopathie und Phytotherapie | Angela Kohrs Heilpraktikerin Herzogenaurach',
    description: `Heilpraktikerin ${contactConfig.firstName} ${contactConfig.lastName} behandelt im Umfeld Erlangen / Herzogenaurach / Fürth mit dem Fokus auf Homöopathie und Phytotherapie. Therapien bei akuten, chronischen und psychischen Erkrankungen. Entfalten Sie Ihre innere Heilkraft durch die Homöopathie und leben Sie ein erfüllteres Leben.`,
  };
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export * from './home/home.ignore';
export default Home;
