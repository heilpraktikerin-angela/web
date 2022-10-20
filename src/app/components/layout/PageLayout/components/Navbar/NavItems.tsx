import clsx from 'clsx';
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

const NavItems: React.FC<TNavItemsProps> = (props) => {
  const { horizontal = true } = props;

  return (
    <nav>
      <ul
        className={clsx(horizontal ? ULNavListHorizontal : ULNavListVertical)}
      >
        {navItems.map((item, i) => (
          <li key={i}>
            <a href={item.href} className={NavItem}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;

const ULNavListHorizontal = tss`
  flex
  items-center
  space-x-8
`;

const ULNavListVertical = tss`
  space-y-6
`;

const NavItem = tss`
  text-lg
  hover:text-secondary
`;

type TNavItem = {
  name: string;
  href?: string;
};

type TNavItemsProps = {
  horizontal?: boolean;
};
