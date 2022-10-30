import clsx from 'clsx';
import React from 'react';
import { useRootContext } from '~/core/context';
import { tss } from '~/core/helper/tss';
import TextItem from './components/TextItem';

const ContactInfo: React.FC<TContactInfoProps> = (props) => {
  const { className } = props;
  const { contactConfig } = useRootContext();

  return (
    <div className={clsx(Container, className)}>
      <h2 className={Title}>Kontakt</h2>
      <div className={ListContainer}>
        <TextItem icon="Phone" text={contactConfig.phoneNumber} />
        <TextItem icon="Mail" text={contactConfig.email} />
        <TextItem icon="MapPin" text={contactConfig.surrounding} />
      </div>
    </div>
  );
};

export default ContactInfo;

type TContactInfoProps = {
  className?: string;
};

const Container = tss`
  relative
  tablet:absolute 
  bottom-0 
  right-0
  min-w-[20rem]
  tablet:right-8 
  phone:right-6
  p-8
  bg-secondary
  tablet:rounded-tl-lg
  rounded-tl-none
  tablet:rounded-tr-lg
  rounded-tr-none
  rounded-br-lg
`;

const Title = tss`
  mb-6
  text-white
  font-bold
  font-playfair-display
  text-3xl
`;

const ListContainer = tss`
  flex
  flex-col
  gap-4
  mr-16
`;
