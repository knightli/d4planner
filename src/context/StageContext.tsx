import {
  FC,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { StageContextType, IStageProvider } from "../@types/stage";
import { Stage } from "react-konva";
import { stageZoom } from "../helpers/stage";

const StageContext = createContext<StageContextType | null>(null);

const StageProvider: FC<IStageProvider> = ({ children }) => {
  const stageRef = useRef<any>(null);
  const [stage, setStage] = useState(stageRef);

  useEffect(() => {
    setStage(stageRef);
  }, [stageRef]);

  return (
    <StageContext.Provider value={{ stage }}>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        draggable
        onWheel={stageZoom}
        ref={stageRef}
      >
        {children}
      </Stage>
    </StageContext.Provider>
  );
};

const useStage = () => {
  return useContext(StageContext);
};

export { StageProvider, useStage };
