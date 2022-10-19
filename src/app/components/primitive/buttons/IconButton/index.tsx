import React from 'react';
import Icon from '~/components/icons';

const IconButton: React.FC<TIconButtonProps> = (props) => {
  const { icon, className, onClick, href, iconProps } = props;

  const IconComponent = Icon[icon];

  if (onClick != null) {
    return (
      <button type="button" onClick={onClick} className={className}>
        <IconComponent {...(iconProps as any)} />
      </button>
    );
  } else if (href != null) {
    return (
      <a href={href} className={className}>
        <IconComponent {...(iconProps as any)} />
      </a>
    );
  } else {
    return <IconComponent {...(iconProps as any)} />;
  }
};

export default IconButton;

type TIconButtonProps<T extends keyof typeof Icon = keyof typeof Icon> = {
  icon: T;
  iconProps?: React.ComponentProps<typeof Icon[T]>;
  className?: string;
  onClick?: () => void;
  href?: string;
};
