import React from 'react';
import Icon from '~/components/icons';
import PageLayout from '~/components/layout/PageLayout';

const Icons: React.FC = () => {
  return (
    <PageLayout showNav={false} showFooter={false}>
      <div className="flex flex-col">
        <Icon.AlertCircle size={48} />
        <Icon.ArrowRight size={48} />
        <Icon.Calendar size={48} />
        <Icon.Facebook size={48} />
        <Icon.Heart size={48} />
        <Icon.Instagram size={48} />
        <Icon.Logo size={48} />
        <Icon.Minus size={48} />
        <Icon.Phone size={48} />
        <Icon.PhoneCall size={48} />
        <Icon.Plus size={48} />
        <Icon.Refresh size={48} />
        <Icon.Star size={48} />
        <Icon.Twitter size={48} />
      </div>
    </PageLayout>
  );
};

export default Icons;
