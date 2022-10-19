import React from 'react';
import { tss } from '~/core/helper/tss';

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

const NavItems: React.FC = () => {
  return (
    <nav>
      <ul className={ULNavList}>
        {navItems.map((item, i) => (
          <a href={item.href} key={i} className={NavItem}>
            {item.name}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;

const ULNavList = tss`
  flex
  items-center
  space-x-8
`;

const NavItem = tss`
  hover:text-secondary
`;

type TNavItem = {
  name: string;
  href?: string;
};
