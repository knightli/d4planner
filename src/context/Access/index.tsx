import { FC, createContext, useContext, useState } from "react";
import { AccessContextType, IAccessProvider } from "../../@types/access";

const AccessContext = createContext<AccessContextType | null>(null);

const AccessProvider: FC<IAccessProvider> = ({ children }) => {
  const isAdmin = false;

  return (
    <AccessContext.Provider value={{ isAdmin }}>
      {children}
    </AccessContext.Provider>
  );
};

const useAccess = () => {
  return useContext(AccessContext);
};

export { AccessProvider, useAccess };
