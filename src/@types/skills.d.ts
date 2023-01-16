export interface ISkillProvider {
  children: ReactNode;
}

export interface ISkillLine {
  id: string;
  coords: number[];
}

export interface ISkill {
  id: string;
  name?: string;
  points?: number;
  maxPoints?: number;
  description?: string;
  x: number;
  y: number;
  connections?: string[];
  lines?: ISkillLine[];
}

export type SkillsContextType = {
  skills: ISkill[];
  updateSkillPosition: ({ id: number, x: number, y: number }) => void;
  addSkill: ({ id, connections }: ISkill) => void;
  loadSkills: (skills: ISkill[], sharedSkills?: SharedSkills[]) => void;
  removeSkill: (id: string) => void;
  addLinkSkill: (selectedSkillId: string, id: string) => void;
  handleSelectSkill: (skill: ISkill) => void;
  selectedSkill: ISkill | null;
  addSkillPoint: (id: string) => void;
  removeSkillPoint: (id: string) => void;
};

export type SharedSkills = {
  id: string;
  points: number;
};

export type Shared = {
  className: string;
  skills: SharedSkills[];
};
