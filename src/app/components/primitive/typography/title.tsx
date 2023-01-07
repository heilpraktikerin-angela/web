import clsx from 'clsx';
import React from 'react';

const fontSize = {
  h1: 'font-playfair-display font-bold text-3xl tablet:text-4xl leading-[2.5rem] desktop:leading-[3.5rem]',
  h2: 'font-playfair-display font-bold text-2xl tablet:text-3xl leading-[2rem] desktop:leading-[2.5rem]',
  h3: 'font-sf-pro text-xl font-bold tablet:text-2xl',
  h4: 'font-playfair-display font-bold text-lg md:text-xl',
};

const titleColors = {
  black: 'text-black',
  white: 'text-white',
  secondary: 'text-secondary',
  primary: 'text-primary',
};

const Title: React.FC<TTitleProps> = (props) => {
  const { variant = 'black', size, as, className, ...rest } = props;

  return React.createElement(as ?? size, {
    className: clsx(fontSize[size], titleColors[variant], className),
    ...rest,
  });
};

export default Title;

export type TTitleProps = {
  size: keyof typeof fontSize;
} & THProps;

export type THProps = {
  variant?: keyof typeof titleColors;
  as?: React.ElementType;
  className?: string;
  id?: string;
} & (
  | { children: React.ReactNode }
  | {
      dangerouslySetInnerHTML: {
        __html: string;
      };
    }
);
