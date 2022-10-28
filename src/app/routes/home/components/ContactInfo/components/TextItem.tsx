import React from 'react';
import Icon from '~/components/icons';
import { tss } from '~/core/helper/tss';
import theme from '~/core/theme';

const TextItem: React.FC<TTextItemProps> = (props) => {
  const { text, icon } = props;

  const IconComponent = Icon[icon];

  return (
    <div className={Container}>
      <div className={IconContainer}>
        <IconComponent size={16} color={theme?.colors.secondary} />
      </div>
      <p className={Text}>{text}</p>
    </div>
  );
};

export default TextItem;

type TTextItemProps = {
  text: string;
  icon: keyof typeof Icon;
};

const Container = tss`
  flex
  flex-row
  items-center
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
  text-white
  font-bold
  font-sf-pro-text
`;
