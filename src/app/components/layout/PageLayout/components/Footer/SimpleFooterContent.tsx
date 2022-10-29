import React from 'react';
import Logo from '~/components/other/Logo';
import TextButton from '~/components/primitive/buttons/TextButton';
import { tss } from '~/core/helper/tss';

const SimpleFooterContent: React.FC = () => {
  const contactConfig = window.ENV.contactConfig;

  return (
    <div className={Container}>
      <div className={TopContainer}>
        <Logo showSubtitle={false} mobileCenter={true} />
        <div>
          <p className={CopyrightText}>
            &copy; {new Date().getFullYear()}{' '}
            {`${contactConfig.firstName} ${contactConfig.lastName}`} | All
            rights reserved.
          </p>
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
 text-sm 
 text-black
`;

const BottomContainer = tss`
  flex
  flex-row
  gap-2
  mt-4
`;
