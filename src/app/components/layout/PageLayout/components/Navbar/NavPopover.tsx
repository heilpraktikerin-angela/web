import React, { useState } from 'react';
import clsx from 'clsx';
import { IconButton } from '~/components/primitive/buttons';
import theme from '~/core/theme';
import { Dialog } from '@headlessui/react';
import NavItems from './NavItems';
import { tss } from '~/core/helper/tss';

const NavPopover: React.FC<TNavPopoverProps> = (props) => {
  const { display = 'tablet:hidden', className } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(className, display, Container)}>
      <IconButton
        icon="Menu"
        iconProps={{ size: 32, color: theme?.colors.black }}
        onClick={() => setIsOpen(true)}
      />
      <Dialog
        as="div"
        className={clsx('fixed z-50 inset-0', display)}
        open={isOpen}
        onClose={(value) => setIsOpen(value)}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
        <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
          <button
            type="button"
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close navigation</span>
            <svg
              viewBox="0 0 10 10"
              className="w-2.5 h-2.5 overflow-visible"
              aria-hidden="true"
            >
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <NavItems />
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
            {/* TODO Phone Number */}
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
