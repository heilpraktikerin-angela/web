import React from 'react';
import Logo from '~/components/other/Logo';
import TextButton from '~/components/primitive/buttons/TextButton';
import { useRootContext } from '~/core/context';
import { tss } from '~/core/helper/tss';
import { PSM } from '../../../../primitive/typography';

const SimpleFooterContent: React.FC = () => {
  const { contactConfig } = useRootContext();

  return (
    <div className={Container}>
      <div className={TopContainer}>
        <Logo showSubtitle={false} mobileCenter={true} />
        <div>
          <PSM className={CopyrightText} textColorClassName={'text-black'}>
            &copy; {new Date().getFullYear()}{' '}
            {`${contactConfig.firstName} ${contactConfig.lastName}`} | All
            rights reserved.
          </PSM>
        </div>
      </div>
      <div className={BottomContainer}>
        <TextButton size={'sm'} href="/impressum">
          Impressum
        </TextButton>
        <p>|</p>
        <TextButton size={'sm'} href="/datenschutz">
          Datenschutz
        </TextButton>
        <p>|</p>
        <TextButton
          size={'sm'}
          target="_blank"
          href="https://github.com/heilpraktikerin-angela/web"
        >
          Open Source
        </TextButton>
        <p>|</p>
        <TextButton size={'sm'} target="_blank" href={contactConfig.googleMaps}>
          Google Maps
        </TextButton>
      </div>
    </div>
  );
};

export default SimpleFooterContent;

const Container = tss`
  flex
  flex-col
  mobile:items-end
  items-center
`;

const TopContainer = tss`
  flex
  flex-col
  w-full
  mobile:flex-row
  justify-between
  items-center
`;

const CopyrightText = tss`
 mobile:mt-0
 mt-4
`;

const BottomContainer = tss`
  flex
  flex-row
  gap-2
  mt-4
`;
