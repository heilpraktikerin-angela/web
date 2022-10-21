import clsx from 'clsx';
import React from 'react';
import Icon from '~/components/icons';
import { tss } from '~/core/helper/tss';

const Button: React.FC<TButtonProps> = (props) => {
  const {
    text,
    iconLeft,
    iconRight,
    span,
    onClick,
    href,
    iconProps = {},
    className,
  } = props;

  const IconLeftComponent = iconLeft ? Icon[iconLeft] : null;
  const IconRightComponent = iconRight ? Icon[iconRight] : null;

  const Content = () => (
    <>
      {span != null && <span className="sr-only">{span}</span>}
      {IconLeftComponent != null && (
        <IconLeftComponent
          size={16}
          color={'currentColor'}
          {...(iconProps as any)}
          className={clsx(IconLeftStyles, iconProps.className)}
        />
      )}
      <p>{text}</p>
      {IconRightComponent != null && (
        <IconRightComponent
          size={16}
          color={'currentColor'}
          {...(iconProps as any)}
          className={clsx(IconRightStyles, iconProps.className)}
        />
      )}
    </>
  );

  if (onClick != null) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={clsx(ButtonContainer, className)}
      >
        <Content />
      </button>
    );
  } else if (href != null) {
    return (
      <a href={href} className={clsx(ButtonContainer, className)}>
        <Content />
      </a>
    );
  } else {
    return (
      <div className={clsx(ButtonContainer, className)}>
        <Content />
      </div>
    );
  }
};

export default Button;

type TButtonProps<T extends keyof typeof Icon = keyof typeof Icon> = {
  text?: string;
  iconRight?: T;
  iconLeft?: T;
  iconProps?: React.ComponentProps<typeof Icon[T]>;
  onClick?: () => void;
  href?: string;
  span?: string;
  className?: string;
};

const ButtonContainer = tss`
  inline-flex
  flex-row
  items-center
  justify-center
  h-12
  px-6
  rounded-sm
  sm:w-auto
  bg-primary
  hover:bg-primary-light
  focus:outline-none
  focus:ring-2
  focus:ring-primary-light
  focus:ring-offset-2
  border-2
  border-primary-light
  hover:border-primary
  text-white
  hover:text-black
  font-semibold
  cursor-pointer
`;

const IconLeftStyles = tss`
  mr-2
`;

const IconRightStyles = tss`
  ml-2
`;
