import React from 'react';
import Icon from '~/components/icons';

const IconButton: React.FC<TIconButtonProps> = (props) => {
  const { icon, className, onClick, href, iconProps, span } = props;

  const IconComponent = Icon[icon];

  if (onClick != null) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {span != null && <span className="sr-only">{span}</span>}
        <IconComponent {...(iconProps as any)} />
      </button>
    );
  } else if (href != null) {
    return (
      <a href={href} className={className}>
        {span != null && <span className="sr-only">{span}</span>}
        <IconComponent {...(iconProps as any)} />
      </a>
    );
  } else {
    return <IconComponent {...(iconProps as any)} />;
  }
};

export default IconButton;

type TIconButtonProps<T extends keyof typeof Icon = keyof typeof Icon> = {
  span?: string;
  icon: T;
  iconProps?: React.ComponentProps<typeof Icon[T]>;
  className?: string;
  onClick?: () => void;
  href?: string;
};
