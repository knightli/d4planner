import { KonvaNodeComponent } from "react-konva";

export interface IStageProvider {
  children: ReactNode;
}

export type StageContextType = {
  stage: KonvaNodeComponent;
  scale: number;
};
