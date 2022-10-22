import clsx from 'clsx';
import React from 'react';
import { tss } from '~/core/helper/tss';
import { InnerContainerXSpacing } from '../../styles';
import SimpleFooterContent from './SimpleFooterContent';

const Footer: React.FC<TFooterProps> = (props) => {
  const { className } = props;
  return (
    <footer className={clsx(FooterContainer, className)}>
      <div className={clsx(InnerContainerXSpacing, FooterInnerContainer)}>
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
  border-t
  border-black-10
`;

const FooterInnerContainer = tss`
  pt-8
  pb-12
`;
