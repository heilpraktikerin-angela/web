import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import Home from './home';
import styles from './home/home.css';
import { getSocialMetas } from '../core/helper';
import type { TContactConfig } from '../core/config';

export async function loader() {
  const { contactConfig } = await import('../core/config');
  return json({
    contactConfig,
  });
}

// MetaFunction, .. not exported from './home' because of hydration issue
export const meta: MetaFunction = (loader: TLoaderData) => {
  const contactConfig = loader.data.contactConfig;
  return {
    ...getSocialMetas(loader, {
      title: `Praxis für Naturheilkunde, Homöopathie und Phytotherapie | ${contactConfig.firstName} ${contactConfig.lastName} Heilpraktikerin Herzogenaurach`,
      description: `Heilpraktikerin ${contactConfig.firstName} ${contactConfig.lastName} behandelt im Umfeld ${contactConfig.surrounding} mit dem Fokus auf Homöopathie und Phytotherapie. Therapien bei akuten, chronischen und psychischen Erkrankungen. Entfalten Sie Ihre innere Heilkraft durch die Homöopathie und leben Sie ein erfüllteres Leben.`,
    }),
  };
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export * from './home';
export default Home;

type TLoaderData = {
  data: {
    contactConfig: TContactConfig;
  };
};
