import clsx from 'clsx';
import React from 'react';
import { HighlightedPhoneNumber } from '~/components/other';
import Logo from '~/components/other/Logo';
import { contactConfig } from '~/core/config';
import { tss } from '~/core/helper/tss';
import { InnerContainerXSpacing } from '../../styles';
import NavItems from './NavItems';
import NavPopover from './NavPopover';

const Navbar: React.FC = () => {
  return (
    <div className={Container}>
      <div className={clsx(InnerContainerXSpacing, InnerContainer)}>
        {/* Left Logo */}
        <Logo showSubtitle={true} />

        {/* Nav Items */}
        <div className={NavContainer}>
          <NavItems horizontal={true} />
        </div>

        {/* Phone Number */}
        <HighlightedPhoneNumber
          phoneNumber={contactConfig.phoneNumber}
          className={PhoneContainer}
          size={'md'}
        />

        {/* Nav Popover */}
        <NavPopover className="ml-2 -my-1" display="desktop:hidden" />
      </div>
    </div>
  );
};

export default Navbar;

const Container = tss`
  flex
  items-center
  fixed
  top-0
  w-full
  h-20
  border-b
  border-black-10
  bg-white
  z-50
`;

const InnerContainer = tss`
  flex
  items-center
  justify-between
  w-full
`;

const NavContainer = tss`
  hidden
  desktop:flex
  items-center
`;

const PhoneContainer = tss`
  hidden
  desktop:flex
`;
