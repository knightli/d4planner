import { FC, createContext, useContext, useState } from "react";
import { ISkill, ISkillProvider, SkillsContextType } from "../../@types/skills";

const SkillsContext = createContext<SkillsContextType | null>(null);

const SkillsProvider: FC<ISkillProvider> = ({ children }) => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);

  const updateSkillPosition = ({ id, x, y }: ISkill) => {
    const updatedSkills = skills.map((skill) => {
      if (skill.id === id) {
        return { ...skill, x, y };
      }
      return skill;
    });
    setSkills(updateLines(updatedSkills));
  };

  const addSkill = ({
    id,
    connections,
    name,
    lines = [],
    maxPoints,
    points = 0,
    description = "",
  }: ISkill) => {
    const skill: ISkill = {
      id,
      name,
      points,
      maxPoints,
      description,
      x: 150,
      y: 150,
      connections,
      lines,
    };
    setSkills([...skills, skill]);
  };

  const updateLines = (skills: ISkill[]): ISkill[] => {
    const LINE_OFFSET = 30;
    skills.map((skill: ISkill) => {
      const lines = skill.connections?.map((connectionId) => {
        const connection = skills.find((s) => s.id === connectionId);
        if (connection) {
          const x1 = skill.x + LINE_OFFSET;
          const y1 = skill.y + LINE_OFFSET;
          const x2 = connection.x + LINE_OFFSET;
          const y2 = connection.y + LINE_OFFSET;
          return { coords: [x1, y1, x2, y2], id: connectionId };
        }
        return { coords: [], id: "" };
      });

      skill.lines = lines;

      return skill;
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

  const addLinkSkill = (selectedSkillId: string, id: string) => {
    const skill = skills.find((skill) => skill.id === selectedSkillId);
    if (skill) {
      if (skill.connections?.includes(id)) {
        setSelectedSkill(null);
        return;
      }
      const updatedSkill = {
        ...skill,
        connections: [...skill.connections!, id],
      };
      setSkills(
        updateLines([
          ...skills.filter((s) => s.id !== selectedSkillId),
          updatedSkill,
        ])
      );
    }
    setSelectedSkill(null);
  };

  const handleSelectSkill = (skill: ISkill) => {
    setSelectedSkill(skill);
  };

  const addSkillPoint = (id: string) => {
    const updatedSkills = skills.map((skill) => {
      if (skill.id === id) {
        if (skill.points! < skill.maxPoints!) {
          return { ...skill, points: skill.points! + 1 };
        }
      }

      return skill;
    });
    setSkills(updateLines(updatedSkills));
  };

  const removeSkillPoint = (id: string) => {
    const updatedSkills = skills.map((skill) => {
      if (skill.id === id) {
        if (skill.points! > 0) {
          return { ...skill, points: skill.points! - 1 };
        }
      }
      return skill;
    });
    setSkills(updateLines(updatedSkills));
  };

  return (
    <SkillsContext.Provider
      value={{
        skills,
        updateSkillPosition,
        addSkill,
        loadSkills,
        removeSkill,
        addLinkSkill,
        handleSelectSkill,
        selectedSkill,
        addSkillPoint,
        removeSkillPoint,
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
