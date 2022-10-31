import React from 'react';
import type {contactConfig, googleConfig} from "~/core/config";

export const RootContext = React.createContext<TRootContext>({
    contactConfig: {} as any,
    googleConfig: {} as any,
})

export const useRootContext = () => React.useContext(RootContext);

export type TRootContext = {
    contactConfig: typeof contactConfig;
    googleConfig: typeof googleConfig
  };