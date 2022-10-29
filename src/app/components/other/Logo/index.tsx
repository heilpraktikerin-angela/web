import clsx from 'clsx';
import React from 'react';
import Icon from '~/components/icons';
import { contactConfig } from '~/core/config';
import { tss } from '~/core/helper/tss';

const Logo: React.FC<TLogoProps> = (props) => {
  const {
    className,
    showSubtitle = true,
    href = '/',
    mobileCenter = false,
  } = props;

  return (
    <a
      href={href}
      className={clsx(
        LogoContainer,
        mobileCenter && LogoContainerMobileCenter,
        className
      )}
    >
      <Icon.Logo size={48} />
      <div
        className={clsx(
          LogoTextContainer,
          mobileCenter && LogoTextContainerMobileCenter
        )}
      >
        {showSubtitle && <p className={LogoTextSubTitle}>Heilpraktikerin</p>}
        <h4
          className={LogoTextTitle}
        >{`${contactConfig.firstName} ${contactConfig.lastName}`}</h4>
      </div>
    </a>
  );
};

export default Logo;

type TLogoProps = {
  className?: string;
  showSubtitle?: boolean;
  href?: string;
  mobileCenter?: boolean;
};

const LogoContainer = tss`
  flex
  flex-row
  items-center
  cursor-pointer
`;

const LogoContainerMobileCenter = tss`
  flex-col
  mobile:flex-row
`;

const LogoTextContainer = tss`
  flex
  flex-col
  ml-4
`;

const LogoTextContainerMobileCenter = tss`
  mt-2
  mobile:mt-0
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
