import clsx from 'clsx';
import React from 'react';
import { tss } from '~/core/helper/tss';
import SimpleFooterContent from './SimpleFooterContent';

const Footer: React.FC<TFooterProps> = (props) => {
  const { className } = props;
  return (
    <footer className={clsx(FooterContainer, className)}>
      <div className={FooterInnerContainer}>
        <SimpleFooterContent />
      </div>
    </footer>
  );
};

export default Footer;

type TFooterProps = {
  className?: string;
};

const FooterContainer = tss`
  mt-16
`;

const FooterInnerContainer = tss`
  border-t
  border-black-10
  pt-10
  pb-16
  px-4
  mobile:px-32
`;
