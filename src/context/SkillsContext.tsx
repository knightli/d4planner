import { FC, createContext, useContext, useState } from "react";
import { ISkill, ISkillProvider, SkillsContextType } from "../@types/skills";
import { useStage } from "./StageContext";
import { StageContextType } from "../@types/stage";

const SkillsContext = createContext<SkillsContextType | null>(null);

const SkillsProvider: FC<ISkillProvider> = ({ children }) => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [currentSkill, setCurrentSkill] = useState<ISkill | null>(null);
  const { stage } = useStage() as StageContextType;

  const updateSkills = (id: number) => {
    const skill: ISkill = {
      id: "skill_0",
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      connections: [],
      lines: [],
    };

    setSkills([...skills, skill]);
  };

  const addSkill = ({ id, connections }: ISkill) => {
    const skill: ISkill = {
      id,
      x: 90,
      y: 90,
      connections,
      lines: [],
    };

    setCurrentSkill(skill);
    setSkills([...skills, skill]);
  };

  return (
    <SkillsContext.Provider
      value={{ skills, currentSkill, updateSkills, addSkill }}
    >
      {children}
    </SkillsContext.Provider>
  );
};

const useSkills = () => {
  return useContext(SkillsContext);
};

export { SkillsProvider, useSkills };
