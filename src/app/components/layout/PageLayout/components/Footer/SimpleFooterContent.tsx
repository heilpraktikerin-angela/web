import React from 'react';
import Logo from '~/components/other/Logo';
import { contactConfig } from '~/core/config';
import { tss } from '~/core/helper/tss';

const SimpleFooterContent: React.FC = () => {
  return (
    <div className={Container}>
      <Logo showSubtitle={false} />
      <p className={CopyrightText}>
        &copy; {new Date().getFullYear()}{' '}
        {`${contactConfig.firstName} ${contactConfig.lastName}`} | All rights
        reserved.
      </p>
    </div>
  );
};

export default SimpleFooterContent;

const Container = tss`
  flex
  flex-row
  justify-between
  items-center
`;

const CopyrightText = tss`
 text-sm 
 text-black
`;
