import PageLayout from '~/components/layout/PageLayout';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Home',
  viewport: 'width=device-width,initial-scale=1',
});

const Home = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl tablet:text-4xl font-playfair-display mt-32">
        Welcome to Remix
      </h1>
      <p>Hello World</p>
    </PageLayout>
  );
};

export default Home;
