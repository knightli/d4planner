export type ClassContextType = {
  className: string;
  setClassName: (className: string) => void;
};

export interface IClassProvider {
  children: ReactNode;
}
