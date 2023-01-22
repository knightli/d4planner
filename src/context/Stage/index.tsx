import {
  FC,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { StageContextType, IStageProvider } from "../../@types/stage";
import { Stage } from "react-konva";

const StageContext = createContext<StageContextType | null>(null);

const StageProvider: FC<IStageProvider> = ({ children }) => {
  const stageRef = useRef<any>(null);
  const [stage, setStage] = useState(stageRef);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setStage(stageRef);
  }, [stageRef]);

  const handleWheel = (e: any) => {
    e.evt.preventDefault();

    const scaleBy = 1.2;
    const oldScale = scale;
    const direction = e.evt.deltaY > 0 ? -1 : 1;
    const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    if (newScale > 0.5 && newScale < 2) {
      setScale(newScale);
    }
  };

  return (
    <StageContext.Provider value={{ stage, scale }}>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
        onWheel={handleWheel}
        draggable
        onContextMenu={(e) => e.evt.preventDefault()}
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
