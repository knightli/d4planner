import { FC, createContext, useContext, useState } from "react";
import { ISkill, ISkillProvider, SkillsContextType } from "../@types/skills";
import { useStage } from "./StageContext";
import { StageContextType } from "../@types/stage";

const SkillsContext = createContext<SkillsContextType | null>(null);

const SkillsProvider: FC<ISkillProvider> = ({ children }) => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [currentSkill, setCurrentSkill] = useState<ISkill | null>(null);

  const updateSkill = ({ id, x, y }: ISkill) => {
    const updatedSkills = skills.map((skill) => {
      if (skill.id === id) {
        return { ...skill, x, y };
      }
      return skill;
    });
    setSkills(updateLines(updatedSkills));
  };

  const addSkill = ({ id, connections, name, lines }: ISkill) => {
    const skill: ISkill = {
      id,
      name,
      x: 150,
      y: 150,
      connections,
      lines: [],
    };

    setCurrentSkill(skill);
    setSkills([...skills, skill]);
  };

  const updateLines = (skills: ISkill[]): ISkill[] => {
    const LINE_OFFSET = 30;
    skills.map((skill: ISkill) => {
      skill.lines = [];
      skill.connections?.map((connection) => {
        const connectedSkill = skills.find((skill) => skill.id === connection);
        if (connectedSkill) {
          skill.lines = [
            skill.x + LINE_OFFSET,
            skill.y + LINE_OFFSET,
            connectedSkill.x + LINE_OFFSET,
            connectedSkill.y + LINE_OFFSET,
          ];
        }
      });
    });
    return skills;
  };

  const loadSkills = (skills: ISkill[]) => {
    setSkills(updateLines(skills));
  };

  const removeSkill = (id: string) => {
    const updatedSkills = skills.filter((skill) => skill.id !== id);
    setSkills(updateLines(updatedSkills));
  };

  return (
    <SkillsContext.Provider
      value={{
        skills,
        currentSkill,
        updateSkill,
        addSkill,
        loadSkills,
        removeSkill,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};

const useSkills = () => {
  return useContext(SkillsContext);
};

export { SkillsProvider, useSkills };
