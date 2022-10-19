import clsx from 'clsx';
import React from 'react';
import Icon from '~/components/icons';
import { tss } from '~/core/helper/tss';
import type { TTheme } from '~/core/theme';
import theme from '~/core/theme';

const fontSize = {
  md: 'lg',
  lg: '2xl',
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
    borderColor = 'secondary',
    backgroundColor = 'brown-light--rgb/20',
  } = props;

  return (
    <div
      className={clsx(PhoneContainer(borderColor, backgroundColor), className)}
    >
      <Icon.Phone
        color={theme?.colors[color] as any}
        size={iconSize[size]}
        strokeWidth={2}
      />
      <p className={PhoneNumberText(fontSize[size], color)}>+49 30 067286820</p>
    </div>
  );
};

export default HighlightedPhoneNumber;

const PhoneContainer = (borderColor: string, backgroundColor: string) => tss`
  flex-row
  items-center
  border
  border-${borderColor}
  rounded-sm
  py-2
  px-4
  bg-${backgroundColor}
  cursor-pointer
`;

const PhoneNumberText = (fontSize: string, color: string) => tss`
  font-bold
  ml-2
  text-${color}
  text-${fontSize}
`;

type THighlightedPhoneNumberProps = {
  className?: string;
  size?: 'md' | 'lg';
  color?: keyof TTheme['colors'];
  borderColor?: keyof TTheme['colors'];
  backgroundColor?:
    | keyof TTheme['colors']
    | `${keyof TTheme['colors']}/${number}`;
};
