import PageLayout from '~/components/layout/PageLayout';
import type { MetaFunction } from '@remix-run/node';
import Button from '~/components/primitive/buttons/Button';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Home',
  viewport: 'width=device-width,initial-scale=1',
});

const Home = () => {
  return (
    <PageLayout>
      <div className="grid tablet:grid-cols-2 gap-4">
        {/* Left */}
        <div>
          <h1 className="text-xl tablet:text-4xl font-playfair-display text-black font-bold">
            Praxis für <span className="text-secondary">Naturheilkunde</span>
          </h1>
          <h2 className="text-xl tablet:text-3xl font-playfair-display text-black font-bold">
            Klassische <span className="text-secondary">Homöopathie</span> und{' '}
            <span className="text-secondary">Phytotherapie</span>
          </h2>
        </div>

        {/* Right */}
        <div>
          <p className="text-lg test-black">
            Schonende und sanfte Heilung mit Globuli, basierend auf natürlichen
            Stoffen.
          </p>
          <Button
            text="Kostenloses Erstgespräch"
            iconRight="ArrowRight"
            href={'/'}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
