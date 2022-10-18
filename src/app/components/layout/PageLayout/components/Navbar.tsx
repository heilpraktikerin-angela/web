import React from 'react';
import Icon from '~/components/icons';
import { tss } from '~/core/helper/tss';
import theme from '~/core/theme';

const Navbar: React.FC = () => {
  const navItems: TNavItem[] = [
    {
      name: 'Termin vereinbaren',
      href: '#arrange-appointment',
    },
    {
      name: 'Über mich',
      href: '#about-me',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    { name: 'Infothek', href: '#faq' },
  ];

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

      {/* Nav */}
      <div className={NavContainer}>
        <nav>
          <ul className={ULNavList}>
            {navItems.map((item, i) => (
              <a href={item.href} key={i} className={NavItem}>
                {item.name}
              </a>
            ))}
          </ul>
        </nav>
      </div>

      {/* Phone Number */}
      <div className={PhoneContainer}>
        <Icon.Phone
          color={theme?.colors['black-75']}
          size={18}
          strokeWidth={2}
        />
        <p className={PhoneNumberText}>+49 30 067286820</p>
      </div>
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

const ULNavList = tss`
  flex
  items-center
  space-x-8
`;

const NavItem = tss`
  hover:text-secondary
`;

const PhoneContainer = tss`
  hidden
  desktop:flex
  flex-row
  items-center
  border
  border-secondary
  rounded-sm
  py-2
  px-4
  bg-brown-light--rgb/20
  cursor-pointer
`;

const PhoneNumberText = tss`
  font-bold
  ml-2
  text-black-75
`;

type TNavItem = {
  name: string;
  href?: string;
};
