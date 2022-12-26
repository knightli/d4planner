export interface ISkillProvider {
  children: ReactNode;
}

export interface ISkillLine {
  id: string;
  coords: number[];
}

export interface ISkill {
  id: string;
  x?: number;
  y?: number;
  connections?: string[];
  lines?: ISkillLine[];
}

export type SkillsContextType = {
  skills: ISkill[];
  currentSkill: ISkill | null;
  updateSkills: (id: number) => void;
  addSkill: ({ id, connections }: ISkill) => void;
};
