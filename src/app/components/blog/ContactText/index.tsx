import React from 'react';
import { useRootContext } from '../../../core/context';

const ContactText: React.FC<TProps> = (props) => {
  const { contactConfig } = useRootContext();
  const { contactConfigPath, as, ...rest } = props;

  const getValue = React.useCallback((): string => {
    const contactConfigPathParts = contactConfigPath.split('.');
    let currentValue = contactConfig;
    for (const part of contactConfigPathParts) {
      if (currentValue != null) {
        currentValue = (currentValue as any)[part];
      }
    }
    return typeof currentValue === 'string' ? currentValue : 'unknown';
  }, [contactConfig, contactConfigPath]);

  return as != null ? (
    React.createElement(as, {
      children: getValue(),
      ...rest,
    })
  ) : (
    <>{getValue()}</>
  );
};

export default ContactText;

type TProps = {
  contactConfigPath: string;
  as?: React.ElementType;
};
