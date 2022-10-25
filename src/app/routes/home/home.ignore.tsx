import React from 'react';
import PageLayout from '~/components/layout/PageLayout';
import Button from '~/components/primitive/buttons/Button';
import { tss } from '~/core/helper/tss';
import { useWindowSize } from '@react-hook/window-size';
import theme from '~/core/theme';
import clsx from 'clsx';
import StatisticText from './components/StatisticText';

const Home: React.FC = () => {
  const [width] = useWindowSize();
  const [tabletBreakPoint, setTabletBreakPoint] = React.useState(-1);

  // https://stackoverflow.com/questions/46443652/react-16-warning-expected-server-html-to-contain-a-matching-div-in-body
  React.useEffect(
    () => setTabletBreakPoint(Number(theme?.screens.tablet.replace('px', ''))),
    [],
  );

  return (
    <PageLayout
      innerContainerXSpacing={false}
      excludeNavbarHeightInContent={false}
    >
      {({ InnerContainerXSpacing, ContentTopPadding }) => {
        return (
          <>
            {/* Hero Section */}
            <div className={clsx(ContentTopPadding, HeroContainer)}>
              {/* Title Section */}
              <div className={clsx(InnerContainerXSpacing, TitleContainer)}>
                {/* Left */}
                <div className={LeftContainer}>
                  <h1 className={Title}>
                    Praxis für{' '}
                    <span className="text-secondary">Naturheilkunde</span>
                  </h1>
                  <h2 className={Subtitle}>
                    Klassische{' '}
                    <span className="text-secondary">Homöopathie</span>{' '}
                    {width > tabletBreakPoint && <br />} und{' '}
                    <span className="text-secondary">Phytotherapie</span>
                  </h2>
                </div>

                {/* Right */}
                <div className={RightContainer}>
                  <p className={Description}>
                    Schonende und sanfte Heilung mit Globuli,{' '}
                    {width > tabletBreakPoint && <br />} basierend auf
                    natürlichen Stoffen.
                  </p>
                  <Button
                    text="Kostenloses Erstgespräch"
                    iconRight="ArrowRight"
                    href={'/'}
                    className={CallToAction}
                  />
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-1 flex-col justify-end">
                {/* Image */}
                <div className="flex-1 overflow-hidden rounded-t-lg bg-secondary heroImage" />

                {/* Image Bottom */}
                <div className="bg-black2 w-full">
                  <div
                    className={clsx(
                      InnerContainerXSpacing,
                      'flex flex-row py-4',
                    )}
                  >
                    <StatisticText
                      title="100+"
                      subtitle="Behandelte Patienten"
                    />
                    <StatisticText
                      title="94%"
                      subtitle="Zufriedene Kunden"
                      className="ml-16"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </PageLayout>
  );
};

export default Home;

const HeroContainer = tss`
  flex
  flex-col
  w-full
  desktop:h-screen
  h-auto
`;

const TitleContainer = tss`
  flex
  w-full
  tablet:flex-row
  tablet:justify-between
  flex-col
  items-center
  py-8
`;

const LeftContainer = tss`
  flex
  flex-col
  items-center
  tablet:items-start
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
  whitespace-normal
  desktop:whitespace-nowrap
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
