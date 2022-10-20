import React from 'react';
import { HighlightedPhoneNumber } from '~/components/other';
import Logo from '~/components/other/Logo';
import { tss } from '~/core/helper/tss';
import NavItems from './NavItems';
import NavPopover from './NavPopover';

const Navbar: React.FC = () => {
  return (
    <div className={Container}>
      {/* Left Logo */}
      <Logo showSubtitle={true} />

      {/* Nav Items */}
      <div className={NavContainer}>
        <NavItems horizontal={true} />
      </div>

      {/* Phone Number */}
      <HighlightedPhoneNumber className={PhoneContainer} size={'md'} />

      {/* Nav Popover */}
      <NavPopover className="ml-2 -my-1" display="desktop:hidden" />
    </div>
  );
};

export default Navbar;

const Container = tss`
  fixed
  top-0
  w-full
  flex
  items-center
  justify-between
  py-4
  lg:pt-8
  px-4
  mobile:px-32
  border-b
  border-black-10
  bg-white--rgb/80
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
