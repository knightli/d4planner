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
  requiredPoints?: number;
  description?: string;
  damageType?: number;
  x: number;
  y: number;
  connections?: string[];
  lines?: ISkillLine[];
  values?: string[];
  icon?: string;
}

export type SkillsContextType = {
  skills: ISkill[];
  updateSkillPosition: ({ id: number, x: number, y: number }) => void;
  addSkill: ({ id, connections }: ISkill) => void;
  loadSkills: (skills: ISkill[], sharedSkills?: SharedSkills[]) => void;
  removeSkill: (id: string) => void;
  updateSkill: (skill: ISkill) => void;
  addLinkSkill: (selectedSkillId: string, id: string) => void;
  handleSelectSkill: (skill: ISkill) => void;
  handleEditSkill: (skill: ISkill) => void;
  selectedSkill: ISkill | null;
  addSkillPoint: (id: string) => void;
  removeSkillPoint: (id: string) => void;
  points: number;
  updatePoints: () => void;
  editSkill: ISkill | null;
};

export type SharedSkills = {
  id: string;
  points: number;
};

export type Shared = {
  className: string;
  skills: SharedSkills[];
};
