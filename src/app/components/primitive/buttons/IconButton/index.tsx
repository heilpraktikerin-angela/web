import React from 'react';
import Icon from '~/components/icons';

const IconButton: React.FC<TIconButtonProps> = (props) => {
  const { icon, className, onClick, href, iconProps = {}, span } = props;

  const IconComponent = Icon[icon];
  const Content = () => (
    <>
      {span != null && <span className="sr-only">{span}</span>}
      <IconComponent size={16} color={'currentColor'} {...(iconProps as any)} />
    </>
  );

  if (onClick != null) {
    return (
      <button type="button" onClick={onClick} className={className}>
        <Content />
      </button>
    );
  } else if (href != null) {
    return (
      <a href={href} className={className}>
        <Content />
      </a>
    );
  } else {
    return (
      <div className={className}>
        <Content />
      </div>
    );
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
