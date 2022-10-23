import PageLayout from '~/components/layout/PageLayout';
import type { MetaFunction } from '@remix-run/node';
import Button from '~/components/primitive/buttons/Button';
import { tss } from '~/core/helper/tss';
import { useWindowSize } from '@react-hook/window-size';
import theme from '~/core/theme';
import clsx from 'clsx';
import { InnerContainerXSpacing } from '~/components/layout/PageLayout/styles';
import StatisticText from './components/StatisticText';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Home',
  viewport: 'width=device-width,initial-scale=1',
});

const Home = () => {
  const [width] = useWindowSize();
  const tabletBreakPoint = Number(theme?.screens.tablet.replace('px', ''));

  return (
    <PageLayout innerContainerXSpacing={false}>
      {/* Title Section */}
      <div className={clsx(InnerContainerXSpacing, TitleContainer)}>
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

      {/* Image */}
      <div className="flex flex-col item-center w-screen">
        <img
          src="/images/lavender-fields.jpg"
          alt="Lavender Fields"
          loading="lazy"
        />

        {/* Image Bottom */}
        <div className="bg-black2 w-full">
          <div className={clsx(InnerContainerXSpacing, 'flex flex-row py-4')}>
            <StatisticText title="100+" subtitle="Behandelte Patienten" />
            <StatisticText
              title="94%"
              subtitle="Zufriedene Kunden"
              className="ml-16"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;

const TitleContainer = tss`
  flex
  tablet:flex-row
  tablet:justify-between
  flex-col
  items-center
  py-8
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
