import React from 'react';
import PageLayout from '~/components/layout/PageLayout';
import Button from '~/components/primitive/buttons/Button';
import { tss } from '~/core/helper/tss';
import { useWindowSize } from '@react-hook/window-size';
import theme from '~/core/theme';
import clsx from 'clsx';
import StatisticText from './components/StatisticText';
import ContactInfo from './components/ContactInfo';

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
              <div className={BottomSection}>
                {/* Image */}
                <div className={clsx(Image, 'heroImage')} />

                {/* Image Bottom */}
                <div className={ImageBottom}>
                  <div
                    className={clsx(
                      InnerContainerXSpacing,
                      'flex flex-row py-4',
                    )}
                  >
                    <StatisticText
                      title="10+"
                      subtitle="Behandelte Patienten"
                    />
                    <StatisticText
                      title="94%"
                      subtitle="Zufriedene Kunden"
                      className="ml-8 tablet:ml-16"
                    />
                  </div>
                </div>

                <ContactInfo />
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
  mobile:pt-16
  pt-8
  pb-8
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
  mb-4
  text-3xl
  tablet:text-4xl
  tablet:text-left
  text-center
  font-playfair-display
  text-black
  font-bold
  leading-[2.5rem]
  desktop:leading-[3.5rem]
  whitespace-normal
  desktop:whitespace-nowrap
`;

const Subtitle = tss`
  tablet:mt-2
  text-2xl
  tablet:text-3xl
  tablet:text-left
  text-center
  font-playfair-display
  text-black
  font-bold
  desktop:leading-[2.5rem]
  leading-[2rem]
`;

const Description = tss`
  mt-4
  mobile:mt-8
  tablet:mt-0
  text-lg
  test-black
  tablet:text-left
  text-center
`;

const CallToAction = tss`
  mt-4
`;

const BottomSection = tss`
  relative
  flex
  flex-1
  flex-col
  justify-end
  mt-8
`;

const Image = tss`
  flex-1
  overflow-hidden
  rounded-t-lg
  bg-secondary
`;

const ImageBottom = tss`
  bg-black2
  w-full
  tablet:w-[90%]
`;
