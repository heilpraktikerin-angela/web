import clsx from 'clsx';
import React from 'react';
import { useRootContext } from '~/core/context';
import { tss } from '~/core/helper/tss';

const NavItems: React.FC<TNavItemsProps> = (props) => {
  const { horizontal = true } = props;
  const { contactConfig } = useRootContext();
  const navItems: TNavItem[] = [
    {
      name: 'Termin vereinbaren',
      href: contactConfig.calcom.initialInterviewUrl,
    },
    {
      name: 'Über mich',
      href: '#about-me',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    { name: 'Infothek', href: '/faq' },
  ];

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
  text-sm
  hover:text-secondary
`;

type TNavItem = {
  name: string;
  href?: string;
};

type TNavItemsProps = {
  horizontal?: boolean;
};
