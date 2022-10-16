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

      {/* Richt Container */}
      <div className={RightContainer}>
        {/* Nav */}
        <div className="hidden tablet:flex items-center">
          <nav>
            <ul className="flex items-center space-x-8">
              {navItems.map((item, i) => (
                <a href={item.href} key={i} className={NavItem}>
                  {item.name}
                </a>
              ))}
            </ul>
          </nav>
        </div>

        {/* Phone */}
        <div className="flex items-center ml-6">
          <Icon.Phone
            color={theme?.colors['black-75']}
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const Container = tss`
  relative
  flex
  items-center
  justify-between
  pt-6
  lg:pt-8
  px-4
  mobile:px-32
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

const RightContainer = tss`
  flex
  items-center
`;

const NavItem = tss`
  hover:text-secondary
`;

type TNavItem = {
  name: string;
  href?: string;
};
