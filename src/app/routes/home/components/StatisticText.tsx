import React from 'react';
import { tss } from '~/core/helper/tss';

const StatisticText: React.FC<TStatisticTextProps> = (props) => {
  const { title, subtitle, className } = props;
  return (
    <div className={className}>
      <h4 className={Title}>{title}</h4>
      <p className={Subtitle}>{subtitle}</p>
    </div>
  );
};

export default StatisticText;

type TStatisticTextProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const Title = tss`
  text-white
  text-2xl
  font-bold
  font-sf-pro-text 
`;

const Subtitle = tss`
  text-white
  text-sm
  font-sf-pro-text 
`;
