import React, { useState } from 'react';
import clsx from 'clsx';
import { IconButton } from '~/components/primitive/buttons';
import { Dialog } from '@headlessui/react';
import NavItems from './NavItems';
import { tss } from '~/core/helper/tss';
import { HighlightedPhoneNumber } from '~/components/other';
import { contactConfig } from '~/core/config';

const NavPopover: React.FC<TNavPopoverProps> = (props) => {
  const { display = 'tablet:hidden', className } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(className, display, Container)}>
      <IconButton
        icon="Menu"
        className={MenuButton}
        iconProps={{ size: 32, color: 'currentColor' }}
        onClick={() => setIsOpen(true)}
        span={'Mobile Navigations Leiste öffnen'}
      />
      <Dialog
        as="div"
        className={clsx(DialogContainer, display)}
        open={isOpen}
        onClose={(value) => setIsOpen(value)}
      >
        <Dialog.Overlay className={DialogOverlay} />
        <div className={InnerDialogContainer}>
          <IconButton
            icon="X"
            className={CloseButton}
            span={'Mobile Navigation schließen'}
            onClick={() => setIsOpen(false)}
            iconProps={{ size: '24', color: 'currentColor' }}
          />
          <NavItems horizontal={false} />
          <div className={PhoneNumberContainer}>
            <HighlightedPhoneNumber phoneNumber={contactConfig.phoneNumber} />
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

const DialogContainer = tss`
  fixed
  z-50
  inset-0
`;

const DialogOverlay = tss`
  fixed
  inset-0
  backdrop-blur-sm
`;

const InnerDialogContainer = tss`
  fixed
  top-4
  right-4
  w-full
  max-w-xs
  rounded-md
  p-6
  bg-white
  shadow-sm
`;

const CloseButton = tss`
  absolute
  top-5
  right-5
  text-black 
  hover:text-secondary
`;

const MenuButton = tss`
  text-black 
  hover:text-secondary
`;

const PhoneNumberContainer = tss`
  mt-6
  pt-6
  border-t
  border-black-10
`;
