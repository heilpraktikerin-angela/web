import React from 'react';
import Icon from '~/components/icons';
import { tss } from '~/core/helper/tss';

const Navbar: React.FC = () => {
  const navItems: TNavItem[] = [
    {
      name: 'TODO',
      href: 'jeff',
    },
  ];

  return (
    <div className={Container}>
      {/* Left Logo */}
      <div className={LogoContainer}>
        <Icon.Logo size={48} />
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
                <a href={item.href} key={i}>
                  {item.name}
                </a>
              ))}
            </ul>
          </nav>
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

type TNavItem = {
  name: string;
  href?: string;
};
