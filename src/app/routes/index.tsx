import PageLayout from '~/components/layout/PageLayout';
import type { MetaFunction } from '@remix-run/node';
import Button from '~/components/primitive/buttons/Button';
import { tss } from '~/core/helper/tss';
import { useWindowSize } from '@react-hook/window-size';
import theme from '~/core/theme';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Home',
  viewport: 'width=device-width,initial-scale=1',
});

const Home = () => {
  const [width] = useWindowSize();
  const tabletBreakPoint = Number(theme?.screens.tablet.replace('px', ''));

  return (
    <PageLayout>
      <div className={Container}>
        {/* Left */}
        <div>
          <h1 className={Title}>
            Praxis für <span className="text-secondary">Naturheilkunde</span>
          </h1>
          <h2 className={Subtitle}>
            Klassische <span className="text-secondary">Homöopathie</span>{' '}
            {width > tabletBreakPoint && <br />} und{' '}
            <span className="text-secondary">Phytotherapie</span>
          </h2>
        </div>

        {/* Right */}
        <div className={RightContainer}>
          <p className={Description}>
            Schonende und sanfte Heilung mit Globuli,{' '}
            {width > tabletBreakPoint && <br />} basierend auf natürlichen
            Stoffen.
          </p>
          <Button
            text="Kostenloses Erstgespräch"
            iconRight="ArrowRight"
            href={'/'}
            className={CallToAction}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;

const Container = tss`
  flex
  tablet:flex-row
  tablet:justify-between
  flex-col
  items-center
`;

const RightContainer = tss`
  flex
  flex-col
  items-center
  tablet:items-start
`;

const Title = tss`
  text-3xl
  tablet:text-4xl
  tablet:text-left
  text-center
  font-playfair-display
  text-black
  font-bold
  leading-[3.5rem]
`;

const Subtitle = tss`
  tablet:mt-2
  text-xl
  tablet:text-3xl
  tablet:text-left
  text-center
  font-playfair-display
  text-black
  font-bold
  leading-10
`;

const Description = tss`
  text-lg
  test-black
  tablet:text-left
  text-center
`;

const CallToAction = tss`
  mt-4
`;
