import clsx from 'clsx';
import React from 'react';
import { useRootContext } from '~/core/context';
import { tss } from '~/core/helper/tss';
import TextItem from './components/TextItem';
import { isMobile } from 'react-device-detect';
import { H2 } from '../../../../components/primitive/typography';

const ContactInfo: React.FC<TContactInfoProps> = (props) => {
  const { className } = props;
  const { contactConfig } = useRootContext();
  const reducedPhoneNumber = contactConfig.phoneNumber.replace(/ /g, '');
  const whatsAppText = 'Hallo Angela';

  return (
    <div className={clsx(Container, className)}>
      <H2 className={Title} variant={'white'}>
        Kontakt
      </H2>
      <div className={ListContainer}>
        <TextItem
          icon="Phone"
          text={contactConfig.phoneNumber}
          href={
            isMobile
              ? `tel:${reducedPhoneNumber}`
              : `whatsapp://send?text=${whatsAppText}&phone=${reducedPhoneNumber}`
          }
        />
        <TextItem
          icon="Mail"
          text={contactConfig.email}
          href={`mailto://${contactConfig.email}`}
        />
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
`;

const ListContainer = tss`
  flex
  flex-col
  gap-4
  mr-16
`;
