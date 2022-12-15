import clsx from 'clsx';
import React from 'react';
import Icon from '~/components/icons';
import { tss } from '~/core/helper/tss';
import theme from '~/core/theme';
import { PLG } from '../../../../../components/primitive/typography';

const TextItem: React.FC<TTextItemProps> = (props) => {
  const { text, icon, href } = props;

  const IconComponent = Icon[icon];

  const Content = () => (
    <>
      <div className={IconContainer}>
        <IconComponent size={16} color={theme?.colors.secondary} />
      </div>
      <PLG className={Text} textColorClassName={'text-white'}>
        {text}
      </PLG>
    </>
  );

  if (href != null) {
    return (
      <a className={clsx(Container, href && ClickableContainer)} href={href}>
        <Content />
      </a>
    );
  } else {
    return (
      <div className={clsx(Container, href && ClickableContainer)}>
        <Content />
      </div>
    );
  }
};

export default TextItem;

type TTextItemProps = {
  text: string;
  icon: keyof typeof Icon;
  href?: string;
};

const Container = tss`
  flex
  flex-row
  items-center
`;

const ClickableContainer = tss`
  cursor-pointer
`;

const IconContainer = tss`
  flex
  items-center
  justify-center
  p-2
  bg-tertiary-light
  rounded-full
  border-2
  border-tertiary-stroke
`;

const Text = tss`
  ml-4
`;
