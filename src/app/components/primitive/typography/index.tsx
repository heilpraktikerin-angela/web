import React from 'react';
import Paragraph from './paragraph';
import type { TPProps } from './paragraph';
import type { THProps } from './title';
import Title from './title';

const H1: React.FC<THProps> = (props) => {
  return <Title {...props} size="h1" />;
};

const H2: React.FC<THProps> = (props) => {
  return <Title {...props} size="h2" />;
};

const H3: React.FC<THProps> = (props) => {
  return <Title {...props} size="h3" />;
};

const H4: React.FC<THProps> = (props) => {
  return <Title {...props} size="h4" />;
};

const PLG: React.FC<TPProps> = (props) => {
  return <Paragraph {...props} size="lg" />;
};

const PSM: React.FC<TPProps> = (props) => {
  return <Paragraph {...props} size="sm" />;
};

const PXS: React.FC<TPProps> = (props) => {
  return <Paragraph {...props} size="xs" />;
};

export { H1, H2, H3, H4, PLG, PSM, PXS };
