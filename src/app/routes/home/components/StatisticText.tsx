import React from 'react';
import { H3, PSM } from '../../../components/primitive/typography';

const StatisticText: React.FC<TStatisticTextProps> = (props) => {
  const { title, subtitle, className } = props;
  return (
    <div className={className}>
      <H3 variant={'white'}>{title}</H3>
      <PSM textColorClassName={'text-white'}>{subtitle}</PSM>
    </div>
  );
};

export default StatisticText;

type TStatisticTextProps = {
  title: string;
  subtitle: string;
  className?: string;
};
