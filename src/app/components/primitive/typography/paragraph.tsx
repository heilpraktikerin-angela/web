import clsx from 'clsx';
import React from 'react';

const fontSize = {
  lg: 'text-lg',
  sm: 'text-sm',
  xs: 'text-xs',
};

const Paragraph: React.FC<TParagraphProps> = (props) => {
  const {
    className,
    prose = true,
    size,
    as = 'p',
    textColorClassName = 'text-black-75',
    ...rest
  } = props;

  return React.createElement(as, {
    className: clsx(
      'max-w-full',
      fontSize[size],
      textColorClassName,
      className,
      {
        prose: prose,
      }
    ),
    ...rest,
  });
};

export default Paragraph;

export type TParagraphProps = {
  size: keyof typeof fontSize;
} & TPProps;

export type TPProps = {
  className?: string;
  prose?: boolean;
  textColorClassName?: string;
  as?: React.ElementType;
} & (
  | { children: React.ReactNode }
  | { dangerouslySetInnerHTML: { __html: string } }
);
