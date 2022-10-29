import clsx from 'clsx';
import React from 'react';
import Icon from '~/components/icons';
import { tss } from '~/core/helper/tss';

const fontSize = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
};

const arrowSize = {
  sm: 12,
  md: 14,
  lg: 16,
};

const TextButton: React.FC<TTextButtonProps> = (props) => {
  const {
    children,
    href,
    onClick,
    showArrow = false,
    size = 'lg',
    className,
  } = props;

  const Content = () => (
    <>
      <p className={Text(size)}>{children}</p>
      {showArrow && (
        <Icon.ArrowRight
          color={'currentColor'}
          size={arrowSize[size]}
          className={Arrow}
        />
      )}
    </>
  );

  if (onClick != null) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={clsx(Container, className)}
      >
        <Content />
      </button>
    );
  } else if (href != null) {
    return (
      <a href={href} className={clsx(Container, className)}>
        <Content />
      </a>
    );
  } else {
    return (
      <div className={clsx(Container, className)}>
        <Content />
      </div>
    );
  }
};

export default TextButton;

type TTextButtonProps = {
  children?: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  showArrow?: boolean;
  size?: 'lg' | 'md' | 'sm';
};

const Container = tss`
  flex
  flex-row
  items-center
  text-black
  hover:text-primary
`;

const Text = (size: Exclude<TTextButtonProps['size'], undefined>) => tss`
  hover:font-bold
  hover:underline
  cursor-pointer
  font-sf-pro-text
  ${fontSize[size]}
`;

const Arrow = tss`
  ml-2
  hover:ml-3
`;
