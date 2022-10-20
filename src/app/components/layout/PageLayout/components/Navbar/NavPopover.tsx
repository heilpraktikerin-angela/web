import React, { useState } from 'react';
import clsx from 'clsx';
import { IconButton } from '~/components/primitive/buttons';
import theme from '~/core/theme';
import { Dialog } from '@headlessui/react';
import NavItems from './NavItems';
import { tss } from '~/core/helper/tss';
import { HighlightedPhoneNumber } from '~/components/other';

const NavPopover: React.FC<TNavPopoverProps> = (props) => {
  const { display = 'tablet:hidden', className } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(className, display, Container)}>
      <IconButton
        icon="Menu"
        iconProps={{ size: 32, color: theme?.colors.black }}
        onClick={() => setIsOpen(true)}
        span={'Mobile Navigations Leiste öffnen'}
      />
      <Dialog
        as="div"
        className={clsx('fixed z-50 inset-0', display)}
        open={isOpen}
        onClose={(value) => setIsOpen(value)}
      >
        <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm" />
        <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-md shadow-sm p-6 text-base font-semibold text-black">
          <IconButton
            icon="X"
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-black hover:text-secondary"
            span={'Mobile Navigation schließen'}
            onClick={() => setIsOpen(false)}
            iconProps={{ size: '24', color: 'currentColor' }}
          />
          <NavItems />
          <div className="mt-6 pt-6 border-t border-black">
            <HighlightedPhoneNumber />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default NavPopover;

type TNavPopoverProps = {
  display: string;
  className: string;
};

const Container = tss`
  flex
  items-center
  justify-center
`;
