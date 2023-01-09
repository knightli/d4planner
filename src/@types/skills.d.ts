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
  x: number;
  y: number;
  connections?: string[];
  lines?: number[];
}

export type SkillsContextType = {
  skills: ISkill[];
  currentSkill: ISkill | null;
  updateSkill: ({ id: number, x: number, y: number }) => void;
  addSkill: ({ id, connections }: ISkill) => void;
  loadSkills: (skills: ISkill[]) => void;
  removeSkill: (id: string) => void;
};
