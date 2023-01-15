import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";
import { ISkill } from "../@types/skills";

export const getSkills = (skills: ISkill[], skillsIds: string[]): ISkill[] => {
  return skills.filter((skill) => skillsIds.includes(skill.id));
};

export const compressSkills = (skills: ISkill[]): string => {
  return compressToEncodedURIComponent(JSON.stringify(skills));
};

export const decompressSkills = (compressedSkills: string): ISkill[] => {
  const decompressedSkills =
    decompressFromEncodedURIComponent(compressedSkills);
  if (!decompressedSkills) {
    return [];
  }
  return JSON.parse(decompressedSkills);
};
