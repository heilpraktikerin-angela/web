import clsx from 'clsx';
import React from 'react';
import { isMobile } from 'react-device-detect';
import Icon from '~/components/icons';
import { tss } from '~/core/helper/tss';
import type { TTheme } from '~/core/theme';
import theme from '~/core/theme';

const fontSize = {
  md: 'text-sm',
  lg: 'text-2xl',
};

const iconSize = {
  md: 18,
  lg: 32,
};

const HighlightedPhoneNumber: React.FC<THighlightedPhoneNumberProps> = (
  props,
) => {
  const {
    className,
    size = 'md',
    color = 'black-75',
    borderColor = 'border-secondary',
    backgroundColor = 'bg-brown-light--rgb/20',
  } = props;
  const phoneNumber = '+49 1578 8080333';
  const reducedPhoneNumber = phoneNumber.replace(/ /g, '');
  const whatsAppText = 'Hallo Angela';

  return (
    <a
      className={clsx(PhoneContainer(borderColor, backgroundColor), className)}
      href={
        isMobile
          ? `tel:${reducedPhoneNumber}`
          : `whatsapp://send?text=${whatsAppText}&phone=${reducedPhoneNumber}`
      }
    >
      <span className="sr-only">Telefonnummer</span>
      <Icon.Phone
        color={theme?.colors[color] as any}
        size={iconSize[size]}
        strokeWidth={2}
      />
      <p className={PhoneNumberText(fontSize[size], color)}>{phoneNumber}</p>
    </a>
  );
};

export default HighlightedPhoneNumber;

const PhoneContainer = (borderColor: string, backgroundColor: string) => tss`
  inline-flex
  flex-row
  items-center
  border
  ${borderColor}
  ${backgroundColor}
  rounded-xs
  py-2
  px-4
  cursor-pointer
`;

const PhoneNumberText = (fontSize: string, color: string) => tss`
  ${fontSize}
  ${color}
  ml-2
`;

type THighlightedPhoneNumberProps = {
  className?: string;
  size?: 'md' | 'lg';
  color?: keyof TTheme['colors'];
  borderColor?: `border-${keyof TTheme['colors']}`;
  backgroundColor?:
    | `bg-${keyof TTheme['colors']}`
    | `${keyof TTheme['colors']}/${number}`;
};
