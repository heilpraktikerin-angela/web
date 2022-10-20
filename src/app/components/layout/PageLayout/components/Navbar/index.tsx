import React from 'react';
import Icon from '~/components/icons';
import { HighlightedPhoneNumber } from '~/components/other';
import { tss } from '~/core/helper/tss';
import NavItems from './NavItems';
import NavPopover from './NavPopover';

const Navbar: React.FC = () => {
  return (
    <div className={Container}>
      {/* Left Logo */}
      <div className={LogoContainer}>
        <Icon.Logo width={48} height={48} />
        <div className={LogoTextContainer}>
          <p className={LogoTextSubTitle}>Heilpraktikerin</p>
          <h4 className={LogoTextTitle}>Angela Kohrs</h4>
        </div>
      </div>

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

const LogoContainer = tss`
  flex
  flex-row
  items-center
`;

const LogoTextContainer = tss`
  flex
  flex-col
  ml-4
`;

const LogoTextSubTitle = tss`
  text-sm
  font-sf-pro-text
  -mb-2
`;

const LogoTextTitle = tss`
  text-xl
  font-playfair-display
  font-bold
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
