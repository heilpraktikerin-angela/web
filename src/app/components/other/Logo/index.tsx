import clsx from 'clsx';
import React from 'react';
import Icon from '~/components/icons';
import { tss } from '~/core/helper/tss';

const Logo: React.FC<TLogoProps> = (props) => {
  const { className, showSubtitle = true, href = '/' } = props;
  return (
    <a href={href} className={clsx(LogoContainer, className)}>
      <Icon.Logo size={48} />
      <div className={LogoTextContainer}>
        {showSubtitle && <p className={LogoTextSubTitle}>Heilpraktikerin</p>}
        <h4 className={LogoTextTitle}>Angela Kohrs</h4>
      </div>
    </a>
  );
};

export default Logo;

type TLogoProps = {
  className?: string;
  showSubtitle?: boolean;
  href?: string;
};

const LogoContainer = tss`
  flex
  flex-row
  items-center
  cursor-pointer
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
