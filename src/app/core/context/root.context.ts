import React from 'react';

export const RootContext = React.createContext<TRootContext>({
    contactConfig: {} as any,
})

export const useRootContext = () => React.useContext(RootContext);

export type TRootContext = {
    contactConfig: any;
  };