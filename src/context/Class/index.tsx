import { FC, createContext, useContext, useState } from "react";
import { ClassContextType, IClassProvider } from "../../@types/class";

const ClassContext = createContext<ClassContextType | null>(null);

const ClassProvider: FC<IClassProvider> = ({ children }) => {
  const [className, setClassName] = useState<string>("barbarian");

  return (
    <ClassContext.Provider value={{ className, setClassName }}>
      {children}
    </ClassContext.Provider>
  );
};

const useClass = () => {
  return useContext(ClassContext);
};

export { ClassProvider, useClass };
