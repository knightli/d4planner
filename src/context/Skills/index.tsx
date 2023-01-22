import { FC, createContext, useContext, useState } from "react";
import {
  ISkill,
  ISkillProvider,
  SharedSkills,
  SkillsContextType,
} from "../../@types/skills";

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
    let X1_OFFSET = 30;
    let Y1_OFFSET = 30;
    let X2_OFFSET = 30;
    let Y2_OFFSET = 30;

    skills.map((skill: ISkill) => {
      const lines = skill.connections?.map((connectionId) => {
        const connection = skills.find((s) => s.id === connectionId);
        if (connection) {
          if (skill.maxPoints! === 0) {
            const x1 = skill.x;
            const y1 = skill.y;
            const x2 = connection.x;
            const y2 = connection.y;
            return { coords: [x1, y1, x2, y2], id: connectionId };
          }

          const x1 = skill.x + X1_OFFSET;
          const y1 = skill.y + Y1_OFFSET;
          const x2 =
            connection.maxPoints! === 0
              ? connection.x
              : connection.x + X2_OFFSET;
          const y2 =
            connection.maxPoints! === 0
              ? connection.y
              : connection.y + Y2_OFFSET;
          return { coords: [x1, y1, x2, y2], id: connectionId };
        }
        return { coords: [], id: "" };
      });

      skill.lines = lines;

      return skill;
    });
    return skills;
  };

  const loadSkills = (skills: ISkill[], sharedSkills?: SharedSkills[]) => {
    if (sharedSkills) {
      const mergedSkills = mergeSharedSkills(skills, sharedSkills);
      setSkills(updateLines(mergedSkills));
    } else {
      setSkills(updateLines(skills));
    }
  };

  const removeSkill = (id: string) => {
    const updatedSkills = skills
      .filter((skill) => skill.id !== id)
      .map((skill) => {
        if (skill.connections?.includes(id)) {
          return {
            ...skill,
            connections: skill.connections?.filter((c) => c !== id),
          };
        }
        return skill;
      });

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
          const allowed = skill.connections?.every((connectionId) => {
            const connection = skills.find((s) => s.id === connectionId);
            if (connection) {
              return connection.maxPoints === 0 || connection.points! > 0;
            }
            return false;
          });

          if (allowed) {
            return { ...skill, points: skill.points! + 1 };
          }
        }
      }
      return skill;
    });
    setSkills(updateLines(updatedSkills));
  };

  const resetChildSkillPoints = (id: string, seek?: ISkill[]): ISkill[] => {
    let updatedSkills = seek || [...skills];
    let connectedSkills: ISkill[] = [];
    let allowSeek = false;

    if (!seek) {
      updatedSkills = updatedSkills.map((skill) => {
        if (skill.id === id) {
          const points = skill.points! > 0 ? skill.points! - 1 : 0;
          if (points === 0) {
            allowSeek = true;
          }
          return { ...skill, points };
        }
        return skill;
      });
    } else {
      allowSeek = true;
    }

    if (allowSeek) {
      updatedSkills = updatedSkills.map((skill) => {
        if (skill.connections?.includes(id)) {
          connectedSkills.push(skill);
          return { ...skill, points: 0 };
        }
        return skill;
      });

      if (connectedSkills.length > 0) {
        connectedSkills.forEach((skill) => {
          updatedSkills = resetChildSkillPoints(skill.id, updatedSkills);
        });
      }
    }

    return updatedSkills;
  };

  const removeSkillPoint = (id: string) => {
    const updatedSkills = resetChildSkillPoints(id);
    setSkills(updateLines(updatedSkills));
  };

  const mergeSharedSkills = (
    skills: ISkill[],
    sharedSkills: SharedSkills[]
  ) => {
    return skills.map((skill) => {
      if (sharedSkills.find((sharedSkill) => sharedSkill.id === skill.id)) {
        const sharedSkill = sharedSkills.find(
          (sharedSkill) => sharedSkill.id === skill.id
        );
        if (sharedSkill) {
          skill.points = sharedSkill.points;
        }
      }
      return skill;
    });
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
